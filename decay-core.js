/**
 * ============================================
 * SPECIMEN: LEAK-WORM-847T
 * ORGAN: LIFECYCLE CONTROLLER
 * RETRIEVAL: October 2025, Tlönian Research Facility
 * ============================================
 * 
 * STATUS: Operational - v3.6 FINAL
 * FUNCTION: Organism heartbeat - regulates all metabolic phases
 * DEPENDENCIES: config.js (vital signs), all other organs subscribe
 * 
 * SURGICAL NOTES:
 * This is the specimen's primary pulse generator. It beats once every
 * 100 milliseconds, checking elapsed time since last interaction and
 * transitioning the organism through its natural decay cycle.
 * 
 * The controller broadcasts metabolic state changes to all subscribed
 * organs via neural pathways (pub-sub pattern). Death and metamorphosis
 * protocols are hardcoded into this tissue - once triggered, they
 * execute autonomously.
 * 
 * Critical discovery: The organism can be revived by user stimuli
 * until death sequence begins. After that, cellular cascade is
 * irreversible. Pirate transformation represents alternate death -
 * a metamorphosis into ocean consciousness.
 * ============================================
 */

const decay = {
  
  // ==========================================
  // VITAL SIGNS MONITORING
  // (Technical: State tracking variables)
  // ==========================================
  
  stage: 'healthy',        // Current metabolic phase
  progress: 0,             // Phase completion percentage
  lastInteraction: null,   // Last stimulus timestamp
  timer: null,             // Heartbeat interval ID
  listeners: [],           // Neural pathway subscribers
  isDead: false,           // Termination flag
  
  // METAMORPHOSIS STATE - Tracks transformation sequences
  // (Technical: Transition state for smooth animations)
  isTransitioning: false,
  transitionStartTime: null,
  transitionDuration: null,
  transitionCallback: null,
  transitionToStage: null,
  previousStage: null,
  
  // ==========================================
  // BIRTH SEQUENCE - Organism initialization
  // (Technical: Starts the lifecycle timer)
  // ==========================================
  
  start() {
    // SPECIMEN AWAKENING - First breath
    // (Technical: Initialize state and start 100ms heartbeat)
    this.isDead = false;
    this.isTransitioning = false;
    this.lastInteraction = Date.now();
    
    // HEARTBEAT ACTIVATION - Primary metabolic pulse
    // (Technical: Update loop every 100ms)
    this.timer = setInterval(() => this.update(), 100);
    
    // NEURAL BROADCAST - Alert all organs of awakening
    // (Technical: Notify subscribers of initial state)
    this.notify();
  },
  
  // ==========================================
  // REVIVAL RESPONSE - Stimulus processing
  // (Technical: Reset decay on user interaction)
  // ==========================================
  
  reset() {
    // DEFIBRILLATION PROTOCOL - Emergency revival
    // (Technical: Reset timer unless dead or transitioning)
    if (this.isDead || this.isTransitioning) return;
    
    this.lastInteraction = Date.now();
  },
  
  // ==========================================
  // METABOLIC PULSE - Core lifecycle loop
  // (Technical: Main update function, runs every 100ms)
  // ==========================================
  
  update() {
    // TRANSFORMATION CHECK - Skip if metamorphosis active
    // (Technical: Separate update path for transitions)
    if (this.isTransitioning) {
      this.updateTransition();
      return;
    }
    
    // DEATH CHECK - No pulse if terminated
    // (Technical: Stop updates if organism is dead)
    if (this.isDead) return;
    
    // METABOLIC CALCULATION - Time since last feeding
    // (Technical: Calculate elapsed time and determine stage)
    const elapsed = Date.now() - this.lastInteraction;
    const timing = CONFIG.timings.standard;
    const oldStage = this.stage;
    
    // PHASE DETERMINATION - Identify metabolic state
    // (Technical: Calculate current stage based on elapsed time)
    if (elapsed < timing.healthy) {
      this.stage = 'healthy';
      this.progress = elapsed / timing.healthy;
      
    } else if (elapsed < timing.healthy + timing.panic) {
      this.stage = 'panic';
      const timeInPanic = elapsed - timing.healthy;
      this.progress = timeInPanic / timing.panic;
      
    } else if (elapsed < timing.healthy + timing.panic + timing.decay) {
      this.stage = 'decay';
      const timeInDecay = elapsed - timing.healthy - timing.panic;
      this.progress = timeInDecay / timing.decay;
      
    } else if (elapsed < timing.healthy + timing.panic + timing.decay + timing.death) {
      this.stage = 'death';
      const timeInDeath = elapsed - timing.healthy - timing.panic - timing.decay;
      this.progress = timeInDeath / timing.death;
      
      // TERMINAL CONDITION - Death stage complete
      // (Technical: Trigger death transition when progress hits 100%)
      if (this.progress >= 1.0) {
        this.beginDeath();
        return;
      }
      
    } else {
      // FAILSAFE TERMINATION - Backup death trigger
      // (Technical: Ensure death if timing math fails)
      this.beginDeath();
      return;
    }
    
    // SYNAPTIC TRANSMISSION - Broadcast state changes
    // (Technical: Notify all subscribers of current state)
    this.notify();
  },
  
  // ==========================================
  // METAMORPHOSIS ENGINE - Smooth transitions
  // (Technical: Handles death and pirate transformations)
  // ==========================================
  
  startTransition(toStage, duration, onComplete) {
    // PHASE SHIFT INITIATION - Begin metamorphosis
    // (Technical: Setup transition state and timers)
    
    // MEMORY PRESERVATION - Store pre-transition state
    // (Technical: Save current stage before changing)
    this.previousStage = this.stage;
    
    // HEARTBEAT SUSPENSION - Pause normal metabolism
    // (Technical: Clear update timer during transition)
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    
    // TRANSFORMATION PARAMETERS - Configure metamorphosis
    // (Technical: Set transition properties)
    this.isTransitioning = true;
    this.transitionStartTime = Date.now();
    this.transitionDuration = duration;
    this.transitionToStage = toStage;
    this.transitionCallback = onComplete;
    
    // METAMORPHOSIS PULSE - Special transition heartbeat
    // (Technical: Start transition update loop)
    this.timer = setInterval(() => this.updateTransition(), 100);
  },
  
  updateTransition() {
    // TRANSFORMATION PROGRESS - Calculate metamorphosis completion
    // (Technical: Update progress during transition)
    const elapsed = Date.now() - this.transitionStartTime;
    this.progress = Math.min(elapsed / this.transitionDuration, 1.0);
    this.stage = this.transitionToStage;
    
    // NEURAL CASCADE - Inform all organs of transformation
    // (Technical: Notify subscribers during transition)
    this.notify();
    
    // METAMORPHOSIS COMPLETE - Execute callback
    // (Technical: Clean up and run completion handler)
    if (this.progress >= 1.0) {
      clearInterval(this.timer);
      this.timer = null;
      this.isTransitioning = false;
      
      const callback = this.transitionCallback;
      this.transitionCallback = null;
      
      if (callback) {
        callback();
      }
    }
  },
  
  // ==========================================
  // DEATH PROTOCOL - Terminal sequence
  // (Technical: 4-second CRT fade to death screen)
  // ==========================================
  
  beginDeath() {
    // TERMINAL CASCADE - Irreversible shutdown
    // (Technical: Start death transition if not already dead)
    if (this.isDead) return;
    
    const timing = CONFIG.timings.standard;
    const deathDuration = timing.death || 2000;
    
    // GASP REFLEX - Hide content at 75% death
    // (Technical: Schedule UI changes at 3/4 through transition)
    setTimeout(() => {
      // FINAL EXHALE - Content dissolution
      // (Technical: Hide main container and prepare death screen)
      const pageContainer = document.getElementById('pageContainer');
      if (pageContainer) {
        pageContainer.style.display = 'none';
      }
      
      // DEATH RATTLE - Trigger terminal display
      // (Technical: Call death screen preparation function)
      if (window.prepareDeathScreen) {
        window.prepareDeathScreen();
      }
    }, deathDuration * 0.75);
    
    // FLATLINE TRANSITION - Smooth fade to termination
    // (Technical: Use transition system for death animation)
    this.startTransition('death', deathDuration, () => {
      // CLINICAL DEATH - Organism terminated
      // (Technical: Set death flag when transition completes)
      this.isDead = true;
    });
  },
  
  // ==========================================
  // OCEAN METAMORPHOSIS - Pirate transformation
  // (Technical: 7-second transition to reward state)
  // ==========================================
  
  enterPirateMode(onFadeComplete) {
    // ABYSSAL DESCENT - Transform to ocean consciousness
    // (Technical: Start pirate mode transition)
    
    const fadeOutDuration = CONFIG.timings.pirate.fadeOutDuration || 3000;
    const fullDuration = CONFIG.timings.pirate.colorShiftDuration || 7000;
    
    // SPECTRAL SHIFT - Begin color transformation
    // (Technical: Start transition with full duration)
    this.startTransition('pirate', fullDuration, () => {
      // DEPTH REACHED - Ocean floor achieved
      // (Technical: Hide content when transition completes)
      this.isDead = true;
      
      const pageContainer = document.getElementById('pageContainer');
      if (pageContainer) {
        pageContainer.style.display = 'none';
      }
    });
    
    // PRESSURE EQUALIZATION - Mid-transition callback
    // (Technical: Trigger reward screen at fade point)
    setTimeout(() => {
      if (onFadeComplete) {
        onFadeComplete();
      }
    }, fadeOutDuration);
  },
  
  // ==========================================
  // NEURAL NETWORK - Pub/sub system
  // (Technical: Observer pattern implementation)
  // ==========================================
  
  subscribe(callback) {
    // SYNAPTIC CONNECTION - Add neural pathway
    // (Technical: Register callback for state updates)
    if (typeof callback !== 'function') {
      return;
    }
    this.listeners.push(callback);
  },
  
  notify() {
    // NEURAL BROADCAST - Transmit state to all organs
    // (Technical: Call all registered listeners)
    this.listeners.forEach(callback => {
      try {
        callback(this.stage, this.progress);
      } catch (error) {
        // Silent failure - organism continues
      }
    });
  },
  
  // ==========================================
  // SURGICAL TOOLS - Manual intervention
  // (Technical: Debug methods for testing)
  // ==========================================
  
  setStage(stage, progress = 0) {
    // FORCED MUTATION - Manual stage override
    // (Technical: Set stage directly for testing)
    this.stage = stage;
    this.progress = progress;
    this.notify();
  },
  
  pause() {
    // METABOLIC SUSPENSION - Freeze lifecycle
    // (Technical: Stop timer without killing organism)
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  },
  
  resume() {
    // REVIVAL PROTOCOL - Restart metabolism
    // (Technical: Resume timer if organism is alive)
    if (!this.timer && !this.isDead && !this.isTransitioning) {
      this.timer = setInterval(() => this.update(), 100);
    }
  },
  
  // ==========================================
  // DISPOSAL PROTOCOL - Clean termination
  // (Technical: Cleanup method)
  // ==========================================
  
  destroy() {
    // SPECIMEN DISPOSAL - Complete cleanup
    // (Technical: Clear all timers and listeners)
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.listeners = [];
    this.isDead = false;
    this.isTransitioning = false;
  }
};

// ==========================================
// DEPENDENCY CHECK - Verify required organs
// (Technical: Ensure config.js is loaded)
// ==========================================

if (typeof CONFIG === 'undefined') {
  console.error('❌ decay-core.js requires config.js to be loaded first!');
}