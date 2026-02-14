/**
 * ============================================
 * SPECIMEN: ANGLERFISH-COMM-v1002
 * ORGAN: CONTENT PHEROMONES
 * RETRIEVAL: February 2026, Tlönian Research Facility
 * ============================================
 * 
 * STATUS: Operational - v1002 ANTHROPIC VARIANT
 * FUNCTION: Archive transport vessel - carries application recording
 * DEPENDENCIES: None (pure data structure)
 * 
 * SURGICAL NOTES:
 * Anthropic-specific variant of the communications portal.
 * Password gate leads to embedded application video.
 * The specimen breathes around the content.
 * 
 * The password "anthropic" is provided to recruiters
 * in the Additional Information field of the Greenhouse form.
 * ============================================
 */

const bookContent = {
  
  metadata: {
    title: "THE ANGLER FISH DINGY - COMMUNICATIONS",
    fragment: "Anthropic-Motion-Designer-Application",
    classification: "ANTHROPIC APPLICATION",
    password: "anthropic",
    totalScreens: 3,
    deathMessage: 'ACCESS TERMINATED<span class="death-subtitle">passive engagement detected</span>'
  },

  screens: [
    // ==========================================
    // SECURITY PROTOCOL - Authentication gate
    // ==========================================
    {
      id: 0,
      type: "password",
      title: "THE ANGLER FISH DINGY - COMMUNICATIONS",
      prompt: "Enter authentication sequence:"
    },

    // ==========================================
    // APPLICATION VIDEO - Embedded player
    // ==========================================
    {
      id: 1,
      type: "content",
      title: "MOTION DESIGNER APPLICATION",
      subtitle: "Anthropic — Core Brand",
      content: `
        <p>≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋</p>
        
        <p><span class="emphasis">Animation is the study of motion.</span></p>
        
        <p>The craft is the manipulation of shapes to represent structure and emotion in time.</p>

        <div class="video-container" style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:2em 0;border:1px solid rgba(255,120,70,0.3);box-shadow:0 0 30px rgba(255,107,43,0.15);">
          <iframe 
            src="https://www.youtube.com/embed/EJQHUq5adRY?rel=0&modestbranding=1&color=white" 
            style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
        
        <p>≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋</p>
        
        <p><span class="no-break">Juan Sebastián Niño Flórez</span></p>
        
        <p><span class="no-break">{🌊:🌊∈🌊}</span></p>
        
        <div class="end-dot"><span class="blink-dot"></span></div>
      `,
      effects: {
        pirateComments: false,
        corruption: false,
        emphasis: ["Animation is the study of motion."]
      }
    },

    // ==========================================
    // REWARD STATE - Acknowledgment screen
    // ==========================================
    {
      id: 2,
      type: "reward",
      metadata: {
        header: 'Thank you for engaging with specimen',
        title: 'ANGLERFISH_COMM_v1002',
        subtitle: 'Anthropic Motion Designer application',
        footerCredit: 'J.S.N.F.',
        footerSymbol: '{🌊:🌊∈🌊}'
      }
    }
  ],
  
  getScreen: function(id) {
    return this.screens.find(screen => screen.id === id);
  },
};
