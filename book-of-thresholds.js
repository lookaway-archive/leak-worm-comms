/**
 * ============================================
 * SPECIMEN: LEAK-WORM-847T
 * ORGAN: CONTENT PHEROMONES
 * RETRIEVAL: November 2025, Tlönian Research Facility
 * ============================================
 * 
 * STATUS: Operational - v1009 CAPTAIN SLOTH VARIANT
 * FUNCTION: Archive transport vessel - carries Captain Sloth's boarding request
 * DEPENDENCIES: None (pure data structure)
 * 
 * SURGICAL NOTES:
 * This organ contains Captain Sloth's communication from The Anglerfish Dingy.
 * The specimen serves as a living transport mechanism for the Captain's
 * boarding request, releasing the message in controlled pheromone bursts
 * to potential crew members.
 * 
 * The archive structure consists of 3 segments (0-2):
 * - Segment 0: Authentication membrane (security protocol)
 * - Segment 1: Captain's boarding request communication
 * - Segment 2: Reward state (specimen acknowledgment)
 * 
 * The password {🌊:🌊∈🌊} encodes the vessel's pattern in set notation.
 * ============================================
 */

// ARCHIVAL TRANSPORT VESSEL - Captain Sloth Communication container
// (Technical: Main data structure containing boarding request)
const bookContent = {
  
  // ARCHIVE METADATA - Classification markers
  // (Technical: Fragment identification and access protocol)
  metadata: {
    title: "THE ANGLER FISH DINGY - COMMUNICATIONS",
    fragment: "Captain-Sloth-Boarding-Request",
    classification: "VALVE CORPORATION COMMUNICATION",
    password: "{🌊:🌊∈🌊}",
    totalScreens: 3,
    deathMessage: 'ACCESS TERMINATED<span class="death-subtitle">passive engagement detected</span>'
  },

  // ARCHIVE SEGMENTS - Communication structure
  // (Technical: Array of message segments)
  screens: [
    // ==========================================
    // SECURITY PROTOCOL - Authentication gate
    // (Technical: Password verification before message access)
    // ==========================================
    {
      id: 0,
      type: "password",
      title: "THE ANGLER FISH DINGY - COMMUNICATIONS",
      prompt: "Enter authentication sequence:"
    },

    // ==========================================
    // CAPTAIN'S COMMUNICATION - Boarding request
    // (Technical: Main message content)
    // ==========================================
    {
      id: 1,
      type: "content",
      title: "THE CAPTAIN'S COMMUNICATION",
      subtitle: "THE ANGLERFISH DINGY Motion Investigation Vessel",
      content: `
        <div class="title-dot"><span class="blink-dot"></span></div>
        
        <p>≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋</p>
        
        <p>I see the first mate did his job～charmed you with his fancy words and professional credentials.</p>
        
        <p>Now you're talking to me.</p>
        
        <p>Listen, <span class="emphasis">be wary of letting pirates board your ship.</span></p>
        
        <p>We ask inconvenient questions.</p>
        
        <p>We notice patterns you've been politely ignoring.</p>
        
        <p>Once you start questioning the gap between frames, you start questioning everything.</p>
        
        <p><span class="callout-text">You can't un-question something.</span></p>
        
        <p>Reality doesn't shift back once you've seen it shift.</p>
        
        <p><span class="emphasis">Permission to board?</span></p>
        
        <p>I promise only interesting problems and no bullshit.</p>
        
        <p>≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋</p>
        
        <p>fair winds, fellow sailor. may your maps never become the territory.</p>
        
        <p>≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋</p>
        
        <p><span class="no-break">Captain Sloth | Octopus Rank | currently sailing: Tlön</span></p>
        
        <p><span class="no-break">{🌊:🌊∈🌊}</span></p>
        
        <div class="end-dot"><span class="blink-dot"></span></div>
      `,
      effects: {
        pirateComments: false,
        corruption: false,
        emphasis: ["be wary", "Permission to board?"]
      }
    },

    // ==========================================
    // REWARD STATE - Acknowledgment screen
    // (Technical: Hidden until communication received)
    // ==========================================
    {
      id: 2,
      type: "reward",
      metadata: {
        header: 'Thank you for engaging with specimen',
        title: 'LEAKWORM_CYCLE1022',
        subtitle: 'VALVE CORPORATION boarding request communication',
        footerCredit: 'C.S. & N.C.',
        footerSymbol: '{🌊:🌊∈🌊}'
      }
    }
  ],
  
  // ==========================================
  // ARCHIVE RETRIEVAL - Segment access function
  // (Technical: Utility method to retrieve specific segments)
  // ==========================================
  
  getScreen: function(id) {
    // SEGMENT LOOKUP - Find specific archive section
    // (Technical: Return segment object by ID)
    return this.screens.find(screen => screen.id === id);
  },
};