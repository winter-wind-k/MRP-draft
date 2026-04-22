// data.js  (clean + robust)
const TONES = ["light", "medium", "olive", "dark"];
const SIZES = ["small", "large"];

// Use SHORT keys for procedures (matches viewer normalizeType: neurodermatitis → "neuro")
const PROCEDURES = {
    inner: ["simple", "simpleScrotoplasty", "simpleScrotoplastyVaginectomy", "simpleScrotoplastyVaginectomyUL", "simpleVaginectomyUL"],
    front: ["simple", "simpleScrotoplasty", "simpleScrotoplastyVaginectomy", "simpleScrotoplastyVaginectomyUL", "simpleVaginectomyUL"],
};

// Tell the generator what actually exists so we don't create 404s.
// You can start small and expand as you add files.
const AVAILABILITY = {
    inner: {
        "simple": { tones: ["light", "medium", "olive", "dark"], sizes: ["small", "large"] },
        "simpleScrotoplasty": { tones: ["light", "medium", "olive", "dark"], sizes: ["small", "large"] },
        "simpleScrotoplastyVaginectomy": { tones: ["light", "medium", "olive", "dark"], sizes: ["small", "large"] },
        "simpleScrotoplastyVaginectomyUL": { tones: ["light", "medium", "olive", "dark"], sizes: ["small", "large"] },
        "simpleVaginectomyUL": { tones: ["light", "medium", "olive", "dark"], sizes: ["small", "large"] },
    },
    front: {
        "simple": { tones: ["light", "medium", "olive", "dark"], sizes: ["small", "large"] },
        "simpleScrotoplasty": { tones: ["light", "medium", "olive", "dark"], sizes: ["small", "large"] },
        "simpleScrotoplastyVaginectomy": { tones: ["light", "medium", "olive", "dark"], sizes: ["small", "large"] },
        "simpleScrotoplastyVaginectomyUL": { tones: ["light", "medium", "olive", "dark"], sizes: ["small", "large"] },
        "simpleVaginectomyUL": { tones: ["light", "medium", "olive", "dark"], sizes: ["small", "large"] },
    }
};


    // Build the image list from availability (fallback: full TONES/SEVERITIES if omitted)
    const images = [];
    Object.keys(PROCEDURES).forEach(view => {
        PROCEDURES[view].forEach(procedure => {
            const avail = AVAILABILITY[view]?.[procedure] || { tones: TONES, sizes: SIZES };
            avail.tones.forEach(tone => {
                avail.sizes.forEach(size => {
                    images.push({
                        view,
                        procedure,
                        tone,
                        size,
                        src: `/images/boys-tool-illustrations/${view}/${view}-${procedure}-${tone}-${size}.jpg`
                    });
                });
            });
        });
    }),

    // Expose globally
    window.boysToolImages = images;