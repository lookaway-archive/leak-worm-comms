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
 * Timer extended to 12 minutes for 6-minute video viewing.
 * ============================================
 */

const bookContent = {
  
  metadata: {
    title: "THE ANGLERFISH DINGY - COMMUNICATIONS",
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
      title: "THE ANGLERFISH DINGY - COMMUNICATIONS",
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
        <p>≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋</p>

        <div class="video-container">
          <iframe 
            src="https://www.youtube.com/embed/EJQHUq5adRY?rel=0&modestbranding=1&color=white" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>

        <p>≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋≋</p>
        
        <p><span class="sigil-text">1234567</span></p>
      `,
      effects: {
        pirateComments: false,
        corruption: false,
        emphasis: []
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
        footerCredit: 'C.S. & N.C.',
        footerSymbol: '{🌊:🌊∈🌊}'
      }
    }
  ],
  
  getScreen: function(id) {
    return this.screens.find(screen => screen.id === id);
  },
};
