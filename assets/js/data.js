/* =============================================================================
   MetallicHamed — all site content lives here. Edit this file only.

   ADD A VIDEO: copy a line in VIDEOS and change it.
     p     platform: "yt" | "tt" (TikTok) | "ig" (Instagram reel) | "drive" | "fb" | "x" | "file"
     ref   the video id (YouTube id, TikTok number, IG reel code, Drive file id, FB url, or "media/clip.mp4")
     c     brand key from BRANDS below (adds the logo + groups by client)
     t     title shown on hover / in the player
     f     "v" vertical (shorts, reels, TikTok)  |  "h" horizontal (long form)
     th    thumbnail in assets/thumbs/ (YouTube makes its own; leave out)
     v     views (number) — shown on the card when set
     cats  which category pages show it: gaming, english, irl, ads, ugc, podcast (incl. documentary), ai, spec
     tag   optional small label, e.g. "Spec edit"
   RULE: long-form / YouTube is embedded only, never uploaded. Only shorts may use p:"file".
   ========================================================================== */

window.MH = {
  profile: {
    brand: "MetallicHamed",
    name: "Mohamed Hamed",
    role: "Senior Video Editor",
    email: "metallichamed@gmail.com",
    whatsapp: "201017785535",
    whatsappDisplay: "+20 101 778 5535",
    cv: "assets/Mohamed-Hamed-Resume.pdf",
    showreel: "onM-cnX5sj0",
    socials: [
      ["Instagram", "https://www.instagram.com/metallichamed/"],
      ["LinkedIn", "https://www.linkedin.com/in/metallichamed/"],
      ["YouTube", "https://www.youtube.com/@hamedgamingshorts"],
      ["My gaming TikTok", "https://www.tiktok.com/@hamedgaming_"]
    ]
  },

  stats: [
    ["200M+", "views generated"],
    ["2,500+", "videos delivered"],
    ["70+", "brands & creators"],
    ["7+", "years editing"]
  ],

  categories: [
    { key: "gaming",      title: "Gaming",          blurb: "Official Arabic TikToks for Call of Duty, Fortnite and Ubisoft, plus long-form for the biggest gaming creators in the region." },
    { key: "english",     title: "English",         blurb: "English-language edits: US creators, YouTube channels, brand ads and spec edits for international clients." },
    { key: "irl",         title: "IRL & Vlogs",     blurb: "Challenges, travel series and vlogs. Multicam, sound design and pacing that holds a 20-minute video." },
    { key: "ads",         title: "Ads",             blurb: "Platform and product ads for telcos, esports platforms and brands, cut to agency specs." },
    { key: "ugc",         title: "UGC",             blurb: "UGC ads for e-commerce products, built for Meta and TikTok paid campaigns." },
    { key: "podcast",     title: "Podcast, Talking Head & Documentary", nav: "Podcast & Docs", blurb: "Podcasts, talking-head reels and documentaries: clean cuts, captions and B-roll that keep a single speaker or a long story moving.",
      /* this page splits by type (video "sub" field) instead of short / long */
      split: [["podcast", "Podcast", "بودكاست"], ["talking", "Talking head", "توكينج هيد"], ["doc", "Documentary", "وثائقي"]] },
    { key: "ai",          title: "AI",              blurb: "AI-generated videos: game ads, product spots and cinematic shots, generated, then cut and finished in the edit.", nosort: true },
    { key: "spec",        title: "Spec edits",      blurb: "Test edits for creators, agencies and brands: hooks, ad variants, YouTube intros and full episodes, cut to each brief.", nosort: true }
  ],
  /* videos pinned to the top of a category page, in this order (by ref); the rest follow by views */
  pins: {
    english: ["media/spec-josesierra-short.mp4", "media/spec-josesierra-intro.mp4"]
  },

  /* Display order for logo walls: companies first, then creators, biggest audience on the left.
     Both ranked by followers/subscribers on their main official account (checked 2026-11-16); accounts without a public count go last. */
  order: {
    companies: ["ulta", "pubg", "mazaj", "msi", "awe", "ultimates", "sta", "cod", "fortnite", "nvidia", "tundra", "ps", "claritin", "ubisoft", "ea", "bk", "spartan", "acer", "predator", "ooredoo",
      "itp", "zain", "arena", "endless", "ggg", "tega", "swarmio", "frenzy", "raad", "cc", "salahmat", "amados", "g365", "arabianleague"],
    creators: ["aboflah", "mjrm", "ahmedshow", "bidw", "aziz", "gamersreact", "i6arba5", "amrelhady", "b3shr", "colby", "sofyan", "cancel", "marvel", "kingsmen",
      "offside", "leonohero", "golazo", "roc", "sheikh", "voltech", "jelly", "reeng", "etalks"],
    /* "Popular" (default view + home rows): hand-ranked by how well-known the name is in the industry
       (a big media group or global publisher beats a big follower count from one internal video) */
    popular: {
      companies: ["itp", "ps", "cod", "ea", "ubisoft", "fortnite", "nvidia", "pubg", "msi", "arabianleague", "sta", "bk", "mazaj", "arena", "zain", "ooredoo",
        "acer", "predator", "tundra", "ulta", "claritin", "spartan", "ultimates", "awe", "tega", "swarmio", "endless", "ggg", "frenzy", "raad", "cc", "g365", "salahmat", "amados"],
      creators: ["aboflah", "ahmedshow", "aziz", "bidw", "mjrm", "gamersreact", "i6arba5", "b3shr", "sofyan", "amrelhady", "colby", "offside", "cancel", "marvel",
        "kingsmen", "golazo", "roc", "leonohero", "sheikh", "voltech", "jelly", "reeng", "etalks"]
    }
  },

  /* brand key: [display name, logo file in assets/logos (or ""), link, subscribers/followers] */
  brands: {
    cod:      ["Call of Duty Arabic", "4-BFZa7lVo.avif", "https://www.tiktok.com/@callofdutyarabic", 599.5e3],
    ps:       ["PlayStation Arabia", "ps-yt.jpg", "https://www.youtube.com/@PlayStationArabia", 246e3],
    fortnite: ["Fortnite Arabic", "6-DhkgdEeT.avif", "https://www.tiktok.com/@fortniteme", 322.9e3],
    ubisoft:  ["Ubisoft Arabic", "5-s7Mz94Vs.avif", "https://www.tiktok.com/@ubisoftme", 116.4e3],
    ea:       ["EA Middle East", "ea-yt.jpg", "https://www.youtube.com/@ElectronicArtsME", 95.6e3],
    nvidia:   ["NVIDIA GeForce ME", "9-aopKru6e.avif", "https://www.instagram.com/nvidiageforceme", 251e3],
    pubg:     ["PUBG Arabic", "26-ngMgTSdx.avif", "https://www.facebook.com/pubg.battlegrounds.mena", 4.6e6],
    itp:      ["ITP Media Group", "itp-logo.avif", "https://www.itp.com"],
    ulta:     ["Ulta Beauty", "11-CJrM88Nl.avif", "https://www.instagram.com/ultabeauty", 8e6],
    acer:     ["Acer", "8-BvabKTYZ.avif", "https://www.instagram.com/acermiddleeast", 25e3],
    predator: ["Predator Middle East", "33-DZ4B05NN.avif", "https://www.instagram.com/predatorgamingme", 10e3],
    bk:       ["Burger King KSA", "30-BvxoYxP9.avif", "https://x.com/BURGERKINGKSA", 82e3],
    claritin: ["Claritin Arabia", "10-Cnnl9ffa.avif", "https://www.facebook.com/ClaritineArabia", 224e3],
    endless:  ["Endless Studios", "19-DeRbA0aT.avif", "https://www.endlessstudios.com"],
    sta:      ["Saudi Tourism Authority", "28-RA7aVmos.avif", "https://www.instagram.com/visitsaudi", 634e3],
    spartan:  ["Spartan Middle East", "3-CtKUflRE.avif", "https://www.instagram.com/spartanmiddleeast", 61e3],
    arena:    ["Arena Esports by e&", "13-hX5I0F8p.avif", "https://arenaesports.ae"],
    awe:      ["All Week Entertainment", "27-B_CXIWha.avif", "https://www.facebook.com/AWE.platform", 1.3e6],
    zain:     ["Zain Esports", "zain-logo.avif", "https://zainesports.com"],
    ggg:      ["Globe Gamer Grounds", "17-BOgSUS49.avif", "https://gamergrounds.ph"],
    salahmat: ["MySalahMat", "16-DrlWbWeH.avif", "https://www.mysalahmat.com"],
    cc:       ["CommerceCore", "20-sEA74poL.avif", "https://commercecore.com"],
    msi:      ["MSI Gaming", "29-C1b7e0qs.avif", "https://www.instagram.com/msigaming", 2e6],
    mazaj:    ["Mazaj", "mazaj-yt.jpg", "https://www.youtube.com/@mazajofficial", 2.96e6],
    tega:     ["The Esports & Gaming Agency ME", "23-DrKsyIKS.avif", "https://www.egamena.com"],
    raad:     ["Ra'ad", "34-CPa0xNRL.avif", "https://raad.gg"],
    ultimates:["The Ultimates", "ultimates-yt.jpg", "https://www.youtube.com/@TheUltimatesGG", 788e3],
    tundra:   ["Tundra Esports", "14-a5d6QIRj.avif", "https://www.tiktok.com/@tundraesports", 247.3e3],
    frenzy:   ["Frenzy", "24-CWsYa7LT.avif", "https://www.frenzyarena.com"],
    ooredoo:  ["Ooredoo EZ", "15-CpZLei3E.avif", "https://www.facebook.com/OoredooEZ", 2.7e3],
    swarmio:  ["Swarmio Media", "12-DcupgvnY.avif", "https://swarmio.inc"],
    amados:   ["Amadòs Strategies", "22-Bt5ybT9c.avif", "https://amadosstrategies.com"],
    g365:     ["365games", "21-EogdobPo.avif", "https://www.linkedin.com/company/365games"],
    roc:      ["ROC Esports", "roc-yt.jpg", "https://www.youtube.com/@TeamRoc6", 38.7e3],
    egamena:  ["EGAMENA", "23-DrKsyIKS.avif", "https://www.tiktok.com/@egamena"],
    // creators
    aboflah:  ["AboFlah", "aboflah-tt.jpg", "https://www.youtube.com/@AboFlah", 50.8e6],
    ahmedshow:["Ahmed Show", "ahmedshow-yt.jpg", "https://www.youtube.com/@Ahmedowsari", 6.04e6],
    marvel:   ["MrMarvelTV", "marvel-yt.jpg", "https://www.youtube.com/@MrMarvelTV", 461e3],
    aziz:     ["Aziz", "aziz-yt.jpg", "https://www.youtube.com/@Aziz14", 3.47e6],
    gamersreact:["Gamers React", "gamersreact-yt.jpg", "https://www.youtube.com/@GamersReact", 3.05e6],
    i6arba5:  ["i6arba5", "i6arba5-yt.jpg", "https://www.youtube.com/@i6rba5", 2.12e6],
    amrelhady:["Amr El Hady", "5-C7BC0b4d.avif", "https://www.tiktok.com/@amrelhady_", 2.1e6],
    b3shr:    ["B3shr", "b3shr-yt.jpg", "https://www.youtube.com/@B3shr", 1.83e6],
    sofyan:   ["Sofyan", "sofyan-yt.jpg", "https://www.youtube.com/@SofyanBN", 1.15e6],
    colby:    ["Colby Martel", "12-DGjev9ub.avif", "https://www.tiktok.com/@colbymartel", 1.3e6],
    offside:  ["OFFSIDE", "offside-yt.jpg", "https://www.youtube.com/@OFFSIDE__Football", 195e3],
    leonohero:["LeoNoHero", "leonohero-yt.jpg", "https://www.youtube.com/@LeoNoHero", 151e3],
    jelly:    ["JellyPeanut", "jelly-yt.jpg", "https://www.youtube.com/@JellyPeanut", 19e3],
    golazo:   ["Golazo", "golazo-yt.jpg", "https://www.youtube.com/@goolazo-", 72.4e3],
    voltech:  ["VoltechFPS", "voltech-yt.jpg", "https://www.youtube.com/@voltechfps"],
    etalks:   ["E-Talks Podcast", "etalks-yt.jpg", "https://www.youtube.com/@e-talkspodcast", 888],
    bidw:     ["BasicallyIDoWrk", "bidw-yt.jpg", "https://www.youtube.com/@BasicallyIDoWrk", 4.77e6],
    cancel:   ["CANCEL", "cancel-yt.jpg", "https://www.youtube.com/@c2ncel", 462e3],
    kingsmen: ["KingsMen", "kingsmen-yt.jpg", "https://www.youtube.com/@KingsMenhadyZ", 251e3],
    sheikh:   ["Sheikh Abdulkarem", "sheikh.jpg", "https://www.instagram.com/sheikh.abdulkarem/", 33e3],
    reeng:    ["The Re-engineered Club", "reeng-yt.jpg", "https://www.youtube.com/@reengineeredclub", 11.7e3],
    arabianleague: ["Arabian League (Riot Games)", "arabianleague.webp", "https://lolesports.com/en-US/leagues/arabian_league"],
    mjrm:     ["MjrmGames", "mjrm-yt.jpg", "https://www.youtube.com/@mjrmgames909", 11.8e6],
    // spec-edit clients (English tests)
    airrack: ["Airrack", "", ""], dfu: ["Daily Fuel Up", "", ""], kfm: ["KFM", "", ""], maxian: ["Maxian Football", "", ""],
    pasynsoft: ["Pasynsoft", "", ""], saatchi: ["Saatchi & Saatchi Qatar", "", ""], vcl: ["VCL 25", "", ""], mudwtr: ["MUDWTR", "", ""],
    snapr: ["SNAPR", "", ""], dlmedia: ["DL Media", "", ""], cbros: ["2 College Brothers", "", ""], sleepy: ["Sleepy", "", ""],
    healthpreneur: ["Healthpreneur", "", ""], yaz: ["Yaz Media", "", ""], matw: ["MATW Project", "", ""],
    snipers: ["Snipers Duel", "", ""], josesierra: ["Jose Sierra", "", ""], task01: ["Editing task", "", ""], digitalride: ["Digital Ride", "", ""],
    trenj: ["Trenj Mo Cringe", "", ""], wavemax: ["WaveMax (CommerceCore)", "", ""], billy: ["Billy Wenk", "", ""], oceanlove: ["OceanLove", "", ""], betterbuy: ["BetterBuy", "", ""],
    // AI work
    swordofrule: ["Sword of Rule", "", ""], aiwork: ["AI concept", "", ""]
  },

  /* m = self-hosted file in media/<m>.mp4 (+ .jpg poster). If m is missing, the original embed is used. */
  videos: [
    /* ---------------- GAMING · short ---------------- */
    { p: "tt", ref: "7406428579484962066", m: "cod-7406428579484962066", c: "cod", t: "Call of Duty Arabic TikTok", f: "v", th: "6-CMu8AZLc.avif", v: 2100000, cats: ["gaming"] },
    { p: "tt", ref: "7495052280392174864", m: "cod-7495052280392174864", c: "cod", t: "Call of Duty Arabic TikTok", f: "v", th: "12-DYvm51dn.avif", v: 1500000, cats: ["gaming"] },
    { p: "tt", ref: "7494317153022233872", m: "cod-7494317153022233872", c: "cod", t: "Call of Duty Arabic TikTok", f: "v", th: "17-C6J8teT6.avif", v: 933400, cats: ["gaming"] },
    { p: "tt", ref: "7515494632373980434", m: "cod-7515494632373980434", c: "cod", t: "Call of Duty Arabic TikTok", f: "v", th: "4-Dr3YS21d.avif", v: 484000, cats: ["gaming"] },
    { p: "tt", ref: "7471292290670152968", m: "fortnite-7471292290670152968", c: "fortnite", t: "Fortnite Arabic TikTok", f: "v", th: "3-D0Dsts_9.avif", v: 536300, cats: ["gaming"] },
    { p: "tt", ref: "7441964240275131655", c: "fortnite", t: "Fortnite Arabic TikTok", f: "v", th: "9-ByWu9pn-.avif", v: 208700, cats: ["gaming"] },
    { p: "tt", ref: "7444613375721606418", m: "fortnite-7444613375721606418", c: "fortnite", t: "Fortnite Arabic TikTok", f: "v", th: "11-CJGiaTw5.avif", v: 34500, cats: ["gaming"] },
    { p: "tt", ref: "7511355118864911623", c: "ubisoft", t: "Ubisoft Arabic TikTok", f: "v", th: "2-DoFByFIn.avif", cats: ["gaming"] },
    { p: "tt", ref: "7467235232014552327", c: "ubisoft", t: "Ubisoft Arabic TikTok", f: "v", th: "7-DtRmRRcZ.avif", cats: ["gaming"] },
    { p: "ig", ref: "DBMU9k6p9aA", m: "nvidia-DBMU9k6p9aA", c: "nvidia", t: "NVIDIA GeForce ME reel", f: "v", th: "5-BgNYbGi4.avif", cats: ["gaming"] },
    { p: "ig", ref: "DEPzs39PiWu", m: "predator-DEPzs39PiWu", c: "predator", t: "Predator Gaming reel", f: "v", th: "15-psAFT1dq.avif", cats: ["gaming", "ads"] },
    { p: "fb", ref: "https://www.facebook.com/watch/?v=1025731131162862", m: "pubg-1025731131162862", c: "pubg", t: "PUBG: Battlegrounds highlights", f: "h", th: "3-CmWmbDu5.avif", cats: ["gaming"] },
    { p: "ig", ref: "Cvm7Wx1vxZQ", c: "arena", t: "Arena Esports highlights", f: "v", th: "1-BrSwMVDZ.avif", cats: ["gaming"] },
    { p: "ig", ref: "CvAQQT2PzI5", c: "arena", t: "Arena Esports reel", f: "v", th: "13-VDNnL_k_.avif", cats: ["gaming"] },
    { p: "drive", ref: "1r0L6OKEs96IyRvPA3njP97akSbuD-Kmx", m: "arena-1r0L6OKEs96I", c: "arena", t: "Arena Esports tournament cut", f: "v", th: "11-Da3sz6pp.avif", cats: ["gaming"] },
    { p: "ig", ref: "CuFCPfZIO7C", c: "arena", t: "Arena Esports meme edit", f: "v", th: "2-CUL5agA2.avif", cats: ["gaming"] },
    { p: "ig", ref: "DAd49Q9oUI8", c: "zain", t: "Zain Esports highlights", f: "v", th: "3-Dec6hQdA.avif", cats: ["gaming"] },
    { p: "ig", ref: "CnhjV7-J3Ty", c: "ooredoo", t: "Ooredoo EZ community highlights", f: "v", th: "4-Cega_dvZ.avif", cats: ["gaming"] },
    { p: "drive", ref: "15mPHuBRUAp4qVrD-H23z3U-4IWvcvM5i", m: "ooredoo-community-15mPHuBR", c: "ooredoo", t: "Ooredoo EZ community highlights", f: "h", th: "1-BT2nKO72.avif", cats: ["gaming"] },
    { p: "fb", ref: "https://www.facebook.com/reel/1202619947281518", m: "ggg-1202619947281518", c: "ggg", t: "Gamer Grounds Philippines", f: "h", th: "2-6a7Xgw5P.avif", cats: ["gaming"] },
    { p: "fb", ref: "https://www.facebook.com/watch/?v=3733447676883448", m: "frenzy-3733447676883448", c: "frenzy", t: "Frenzy Arena highlights", f: "h", th: "2-CfpAF7gu.avif", cats: ["gaming"] },
    { p: "tt", ref: "7462308222754426144", url: "https://www.tiktok.com/@tundraesports/video/7462308222754426144", c: "tundra", t: "Tundra Esports stream moment", f: "v", th: "3-Bt_CnyqH.avif", v: 42000, cats: ["gaming"] },
    { p: "x", ref: "https://x.com/TheUltimatesgg/status/1654913920849829888", m: "ultimates-1654913920849829888", c: "ultimates", t: "The Ultimates", f: "h", th: "2-CJoCOX9h.avif", cats: ["gaming"] },
    { p: "drive", ref: "1NtQLYnsNyjnj8-vueycTVkNmSsMRhMEn", m: "arabianleague-1NtQLYnsNyjnj8", c: "arabianleague", t: "Arabian League stream moment", f: "v", th: "1-Bh6_OcN3.avif", cats: ["gaming"] },

    /* ---------------- GAMING · long ---------------- */
    { p: "yt", ref: "1KJaZoZgTvw", d: "2022-02-22", c: "aboflah", t: "ابوفله توفى بحادث سيارة؟؟ | TikTok reaction #2", f: "h", v: 9154611, cats: ["gaming"] },
    { p: "yt", ref: "pF-40SHydHM", d: "2022-02-24", c: "aboflah", t: "أفشل لاعب في ببجي يعود", f: "h", v: 6414959, cats: ["gaming"] },
    { p: "yt", ref: "WDIVw69g1w0", d: "2022-08-17", c: "aboflah", t: "AboFlah gaming", f: "h", v: 6739, cats: ["gaming"] },
    { p: "yt", ref: "dmhMm7lmWRw", d: "2021-09-11", c: "aziz", t: "PICO PARK مع فيرفول واوبلز وبندريتا", f: "h", v: 2575367, cats: ["gaming"] },
    { p: "yt", ref: "wokcf4Va6eg", d: "2021-09-13", c: "aziz", t: "Aziz gaming", f: "h", v: 2291433, cats: ["gaming"] },
    { p: "yt", ref: "5UMnBG_eAYY", d: "2021-11-17", c: "aziz", t: "Aziz gaming", f: "h", v: 471656, cats: ["gaming"] },
    { p: "yt", ref: "EgvX2qF2FCE", d: "2022-02-01", c: "aziz", t: "Aziz gaming", f: "h", v: 125824, cats: ["gaming"] },
    { p: "yt", ref: "Lulc7ZQOg-U", d: "2021-11-22", c: "ahmedshow", t: "Ahmed Show gaming", f: "h", v: 635399, cats: ["gaming"] },
    { p: "yt", ref: "vytFscb7FV8", d: "2024-09-11", c: "ea", t: "FC 25 ratings reveal: guess the card", f: "h", v: 548230, cats: ["gaming"] },
    { p: "yt", ref: "Agga52V76wk", d: "2026-10-17", c: "bidw", t: "Nogla is never gonna beat the allegations", f: "h", v: 151920, cats: ["gaming", "english"] },
    { p: "yt", ref: "T_MY8JvoWTo", d: "2026-10-24", c: "bidw", t: "DOO DOO DOO DOO BANANA BOAT", f: "h", v: 105095, cats: ["gaming", "english"] },
    { p: "yt", ref: "0El6ePQUtng", d: "2026-10-09", c: "bidw", t: "My friends love gaslighting me", f: "h", v: 59679, cats: ["gaming", "english"] },
    { p: "yt", ref: "4sfeqf4-LyM", d: "2023-02-22", c: "gamersreact", t: "Gamers React", f: "h", v: 128556, cats: ["gaming"] },
    { p: "yt", ref: "pCzfGtsK0xY", d: "2021-10-22", c: "sofyan", t: "Sofyan gaming", f: "h", v: 113602, cats: ["gaming"] },
    { p: "yt", ref: "5ELjkeEKSlM", d: "2020-11-02", c: "b3shr", t: "B3shr gaming", f: "h", v: 21910, cats: ["gaming"] },
    { p: "yt", ref: "mlt3C716x_E", d: "2020-09-08", c: "b3shr", t: "B3shr gaming", f: "h", v: 19762, cats: ["gaming"] },
    { p: "yt", ref: "lZ_Ho4fXVCg", d: "2020-12-07", c: "b3shr", t: "B3shr gaming", f: "h", v: 19480, cats: ["gaming"] },
    { p: "yt", ref: "QiL6CgvH_rU", d: "2020-10-02", c: "b3shr", t: "B3shr", f: "h", v: 13401, cats: ["gaming"] },

    /* ---------------- ENGLISH ---------------- */
    { p: "yt", ref: "o12FbYlg8Fw", d: "2022-12-21", c: "offside", t: "Top 20 craziest goals in Premier League history", f: "h", v: 4197394, cats: ["english"] },
    { p: "yt", ref: "zADUh86ejKw", d: "2023-05-23", m: "offside-zADUh86ejKw", c: "offside", t: "OFFSIDE short", f: "v", th: "7-DBdiHEPD.avif", v: 34491, cats: ["english"] },
    { p: "yt", ref: "dMjK6BbLmqE", d: "2024-04-03", c: "golazo", t: "Golazo", f: "h", v: 2332995, cats: ["english"] },
    { p: "yt", ref: "RtHFYeANEfY", d: "2023-05-09", c: "jelly", t: "JellyPeanut Overwatch (he transforms!)", f: "h", cats: ["english"] },
    { p: "tt", ref: "7503329191841107246", m: "colby-7503329191841107246", url: "https://www.tiktok.com/@colbymartel/video/7503329191841107246", c: "colby", t: "Colby Martel TikTok", f: "v", th: "2-CcjcuRFi.avif", v: 158500, cats: ["english", "irl"] },
    { p: "tt", ref: "7502463977889418542", url: "https://www.tiktok.com/@colbymartel/video/7502463977889418542", c: "colby", t: "Colby Martel TikTok", f: "v", th: "4-B1z78jzS.avif", v: 117100, cats: ["english", "irl"] },
    { p: "tt", ref: "7499572035417296158", m: "colby-7499572035417296158", url: "https://www.tiktok.com/@colbymartel/video/7499572035417296158", c: "colby", t: "Colby Martel TikTok", f: "v", th: "6-Bjr75jsg.avif", v: 63800, cats: ["english", "irl"] },
    { p: "ig", ref: "DJ9negCh57B", m: "endless-DJ9negCh57B", c: "endless", t: "Moments, memories and milestones", f: "v", th: "3-CRErDwQJ.avif", cats: ["english", "irl"] },
    { p: "drive", ref: "11buqEQnX5GMZUWAxgbRuPiJDdJ5QHRWZ", m: "ulta-11buqEQnX5GM", c: "ulta", t: "Ulta Beauty internal case study", f: "h", th: "5-B8udc-Ba.avif", cats: ["english", "ads"] },

    /* ---------------- SPEC EDITS (tests) ----------------
       Tests appear ONLY on the Spec edits page unless Hamed asks otherwise (Jose Sierra is also pinned first in English).
       This page has no sort menu: the order below is the order on the page (see "pin" on the category). */
    { p: "drive", ref: "1QLQJm1ADKItRVdk8jjuZRXVirtD20Lkn", m: "airrack-1QLQJm1ADKIt", c: "airrack", t: "Airrack-style edit", f: "v", th: "1-HeofAyYl.avif", cats: [], tag: "Spec edit" },
    { p: "file", ref: "media/spec-josesierra-short.mp4", c: "josesierra", t: "Short", f: "v", cats: ["english"], tag: "Spec edit" },
    { p: "drive", ref: "1K0eXS2QNO4M4sdjN4mPc_vD6CVrB3Pek", m: "mudwtr-1K0eXS2QNO4M", c: "mudwtr", t: "MUDWTR test ad", f: "v", th: "10-DvqOLUbs.avif", cats: [], tag: "Spec edit" },
    { p: "drive", ref: "1-_-O3EEXJQI9xmWGlM2f5Ryb2PiUCpGC", m: "snapr-1-_-O3EEXJQI", c: "snapr", t: "SNAPR structured ad", f: "v", th: "11-Bp26b6Ec.avif", cats: [], tag: "Spec edit" },
    { p: "drive", ref: "1jh9W12z3gadjg_bCoJnE2sqyd_2JxGj8", m: "kfm-1jh9W12z3gad", c: "kfm", t: "KFM", f: "v", th: "5-bs2jONGs.avif", cats: [], tag: "Spec edit" },
    { p: "drive", ref: "1Qa4qp_mBxWVEnZ5dwqhTyK_6_nWLNTAS", m: "cbros-1Qa4qp_mBxWV", c: "cbros", t: "2 College Brothers", f: "v", cats: [], tag: "Spec edit" },
    { p: "drive", ref: "1SSlQbVRIzj99d-_bhr8oI0pkmCRUmdGb", m: "matw-1SSlQbVRIzj9", c: "matw", t: "MATW Project", f: "v", cats: [], tag: "Spec edit" },
    { p: "file", ref: "media/spec-digitalride-hook1.mp4", c: "digitalride", t: "Ad, hook 1", f: "v", cats: [], tag: "Spec edit" },
    { p: "file", ref: "media/spec-cc-wavemax-3.mp4", c: "wavemax", t: "WaveMax UGC", f: "v", cats: [], tag: "Spec edit" },
    { p: "file", ref: "media/spec-billy-marryme.mp4", c: "billy", t: "Marry me (enhanced edit)", f: "v", cats: [], tag: "Spec edit" },
    { p: "file", ref: "media/spec-betterbuy.mp4", c: "betterbuy", t: "BetterBuy ad", f: "v", cats: [], tag: "Spec edit" },
    // long form, in Hamed's order
    { p: "file", ref: "media/spec-josesierra-intro.mp4", c: "josesierra", t: "YouTube intro", f: "h", cats: ["english"], tag: "Spec edit" },
    { p: "drive", ref: "1G9biCeqPHT0sei5UkaQCrI4BbWesQpxp", m: "sleepy-1G9biCeqPHT0", c: "sleepy", t: "Sleepy", f: "h", cats: [], tag: "Spec edit" },
    { p: "file", ref: "media/spec-trenj-fruits.mp4", c: "trenj", t: "Fruits challenge (full episode)", f: "h", cats: [], tag: "Spec edit" },
    { p: "drive", ref: "1eJa35pQRdnC9j1rShO4b0qCG-kqEcyry", m: "amados-1eJa35pQRdnC", c: "amados", t: "Amadòs Strategies", f: "h", th: "2-Czdss_Sz.avif", cats: [], tag: "Spec edit" },
    { p: "drive", ref: "1KJ_25T-_LLqEfmlKKi1UbhTqMWbG3djS", m: "healthpreneur-1KJ_25T", c: "healthpreneur", t: "Healthpreneur", f: "h", cats: [], tag: "Spec edit" },
    { p: "drive", ref: "1zj6G4cBdJgFzuYvwUVV-dPWL4kmvulGy", m: "vcl-1zj6G4cBdJgF", c: "vcl", t: "VCL 25", f: "h", th: "9-DlI0s6iY.avif", cats: [], tag: "Spec edit" },
    { p: "drive", ref: "1h_g9pkCq1--TsQnrMHJcijBRxTFK4SN-", m: "dfu-1h_g9pkCq1", c: "dfu", t: "Daily Fuel Up", f: "h", th: "4-gYMyrxIZ.avif", cats: [], tag: "Spec edit" },

    /* ---------------- AI (Drive "Ai Work" folder, self-hosted in media/ai-*) ---------------- */
    { p: "file", ref: "media/spec-digitalride-ai.mp4", c: "digitalride", t: "AI ad", f: "v", cats: ["ai"] },
    { p: "file", ref: "media/ai-s5.mp4", c: "swordofrule", t: "Sword of Rule, game ad", f: "v", cats: ["ai"] },
    { p: "file", ref: "media/ai-s2.mp4", c: "swordofrule", t: "Sword of Rule, the heroes", f: "v", cats: ["ai"] },
    { p: "file", ref: "media/ai-s4.mp4", c: "swordofrule", t: "Sword of Rule, warrior", f: "v", cats: ["ai"] },
    { p: "file", ref: "media/ai-s7.mp4", c: "swordofrule", t: "Sword of Rule, falconer", f: "v", cats: ["ai"] },
    { p: "file", ref: "media/ai-s6.mp4", c: "swordofrule", t: "Sword of Rule, the sage", f: "v", cats: ["ai"] },
    { p: "file", ref: "media/ai-s3.mp4", c: "swordofrule", t: "Sword of Rule, desert camp", f: "v", cats: ["ai"] },
    { p: "file", ref: "media/ai-s1.mp4", c: "swordofrule", t: "Sword of Rule, battlefield", f: "v", cats: ["ai"] },
    { p: "file", ref: "media/ai-v2.mp4", c: "aiwork", t: "Skincare ad, talking pear", f: "v", cats: ["ai"] },
    { p: "file", ref: "media/ai-v1.mp4", c: "aiwork", t: "Face serum product shot", f: "v", cats: ["ai"] },
    { p: "file", ref: "media/ai-motion.mp4", c: "aiwork", t: "Cinematic motion graphic", f: "v", cats: ["ai"] },
    { p: "file", ref: "media/ai-saladin.mp4", c: "aiwork", t: "Salah al-Din, cinematic shot", f: "h", cats: ["ai"] },
    { p: "file", ref: "media/ai-saudi-desk.mp4", c: "aiwork", t: "Saudi presenter at a desk", f: "h", cats: ["ai"] },

    /* ---------------- IRL & VLOGS ---------------- */
    { p: "yt", ref: "RALnd4Tidz8", d: "2021-06-01", c: "aziz", t: "تحدي اكمل الجملة بلهجات مختلفة", f: "h", v: 2894456, cats: ["irl"] },
    { p: "yt", ref: "C59qDUGdjm8", d: "2021-06-25", c: "aziz", t: "تحدي تهريب البضائع مع اليوتيوبرز", f: "h", v: 2646138, cats: ["irl"] },
    { p: "yt", ref: "QvD2c0VwE2o", d: "2021-06-17", c: "aziz", t: "Aziz challenge", f: "h", v: 794759, cats: ["irl"] },
    { p: "yt", ref: "QeUr8V8juxo", d: "2021-08-22", c: "aziz", t: "Aziz challenge", f: "h", v: 773315, cats: ["irl"] },
    { p: "yt", ref: "61ANCuD_Em4", d: "2026-11-12", c: "mjrm", t: "فاجأت بنتي ملك بمحل ألعاب اطفال متنقل!", f: "h", v: 1145982, cats: ["irl"] },
    { p: "yt", ref: "yh80UCaubZc", d: "2020-11-28", c: "kingsmen", t: "KingsMen ملوك التحدي", f: "h", v: 442393, cats: ["irl"] },
    // ROC Esports (Team Roc channel) — IRL challenges, 2026
    { p: "yt", ref: "Yq8OlhCmS14", d: "2026-06-30", c: "roc", t: "تحدي الحروف مع العيال!! | حول الرياض", f: "h", v: 9919, cats: ["irl"] },
    { p: "yt", ref: "dcLNe9to6Sg", d: "2026-05-20", c: "roc", t: "خويك النكبة (مع العيال)", f: "h", v: 9674, cats: ["irl"] },
    { p: "yt", ref: "w2qvmkZzUzM", d: "2026-05-12", c: "roc", t: "تحدي الحواس | حل لغز الجريمة", f: "h", v: 8219, cats: ["irl"] },
    // Mazaj — "Ma Yeghla Alaik" Hong Kong vlog series (S02), 4 episodes; BTS + best-moments videos left out on purpose
    { p: "yt", ref: "R_Z5ElRQ4es", d: "2026-02-26", c: "mazaj", t: "اصطدنا سمك في هونغ كونغ | ما يغلى عليك", f: "h", v: 778108, cats: ["irl"] },
    { p: "yt", ref: "sNs8q20IryU", d: "2026-03-12", c: "mazaj", t: "دخلنا عالم ديزني لاند في هونغ كونغ | ما يغلى عليك", f: "h", v: 679408, cats: ["irl"] },
    { p: "yt", ref: "CmJVilMe2B0", d: "2026-02-19", c: "mazaj", t: "رجعنا على هونغ كونغ | ما يغلى عليك", f: "h", v: 663788, cats: ["irl"] },
    { p: "yt", ref: "fnBOLDOerYA", d: "2026-03-19", c: "mazaj", t: "وزّعنا ورود على الناس | ما يغلى عليك", f: "h", v: 663482, cats: ["irl"] },
    { p: "yt", ref: "F08cBZDa4WM", d: "2025-01-08", c: "spartan", t: "Spartan strength challenge (with Mazaj)", f: "h", v: 8086, cats: ["irl"] },
    { p: "yt", ref: "OHMadHmc-eg", d: "2022-09-21", c: "cancel", t: "CANCEL", f: "h", v: 45171, cats: ["irl"] },
    { p: "yt", ref: "mVmMyYxPQW8", d: "2021-10-29", c: "cancel", t: "CANCEL", f: "h", v: 44616, cats: ["irl"] },
    { p: "yt", ref: "URdsD1OoRCk", d: "2022-10-15", c: "cancel", t: "CANCEL", f: "h", v: 15151, cats: ["irl"] },
    { p: "yt", ref: "v3B36-XFxOc", d: "2022-04-30", c: "aboflah", t: "AboFlah vlog", f: "h", v: 15417, cats: ["irl"] },
    { p: "yt", ref: "G7bP2wSk-xw", d: "2022-08-17", c: "aboflah", t: "AboFlah", f: "h", v: 3447, cats: ["irl"] },
    { p: "yt", ref: "kaaIWTXf724", d: "2026-08-10", c: "ps", t: "لعبنا داخل شلال شبح يوتيه · Play Destinations", f: "h", v: 2447, cats: ["irl"] },
    { p: "yt", ref: "TIcU3CJG3aM", d: "2026-08-26", c: "ps", t: "زرنا راكون سيتي · Play Destinations", f: "h", v: 2353, cats: ["irl"] },
    { p: "yt", ref: "2z3N51rCXjw", d: "2026-08-03", c: "ps", t: "007 First Light في مكان سري · Play Destinations", f: "h", v: 1501, cats: ["irl"] },
    { p: "yt", ref: "f2O9evHDzrQ", d: "2025-10-02", c: "ps", t: "Hideo Kojima's visit to Saudi Arabia", f: "h", v: 1163, cats: ["irl"] },
    { p: "tt", ref: "7361725976633494802", m: "egamena-7361725976633494802", url: "https://www.tiktok.com/@egamena/video/7361725976633494802", c: "egamena", t: "EGAMENA TikTok", f: "v", th: "5-CRQwHEPN.avif", v: 445400, cats: ["irl"] },
    { p: "ig", ref: "CwQb9xws5wm", c: "arena", t: "Arena Esports IRL reel", f: "v", th: "1-B3nWcMTT.avif", cats: ["irl"] },
    { p: "drive", ref: "1bRsAc1vHtU0Elf-HALDOtIfORDHYBKpx", m: "saatchi-1bRsAc1vHtU0", c: "saatchi", t: "Saatchi & Saatchi Qatar", f: "v", th: "8-C0qtR-fn.avif", cats: ["irl"], tag: "Spec edit" },

    /* ---------------- ADS ---------------- */
    { p: "ig", ref: "CuPERNroGjI", c: "ooredoo", t: "Ooredoo EZ ad", f: "v", th: "3-FwI06bhz.avif", cats: ["ads"] },
    { p: "drive", ref: "1kzf4VIJKe5FPpEKDECHRsCQgGSF3sTY_", m: "ooredoo-showcase-1kzf4VIJ", c: "ooredoo", t: "Ooredoo EZ platform showcase", f: "v", th: "1-CQvipSLN.avif", cats: ["ads"] },
    { p: "drive", ref: "1BXa_-DzL1ofcyvzzxPjAhszujFJJIZ2S", m: "ooredoo-signup-1BXa_-Dz", c: "ooredoo", t: "Ooredoo EZ sign-up ad", f: "v", th: "5-DjZinw3t.avif", cats: ["ads"] },
    { p: "drive", ref: "1d-QuSUlNlQaRgf546c2P6IBbu2kQaI15", m: "ooredoo-register-1d-QuSUl", c: "ooredoo", t: "Ooredoo EZ register & verify", f: "h", th: "8-CFq5OsXy.avif", cats: ["ads"] },
    { p: "ig", ref: "CtMaoL8ANks", c: "arena", t: "Arena Esports ad", f: "v", th: "4-BYfl1Fi-.avif", cats: ["ads"] },
    { p: "drive", ref: "1aZltlzmpiWD7PmgwvqBHHcwXixxNY8s_", m: "arena-lan-1aZltlzmpiWD", c: "arena", t: "Arena Esports LAN ad", f: "h", th: "6-D3hAprve.avif", cats: ["ads"] },
    { p: "drive", ref: "1DYf-UURIOUPIC7iL1OmKfyVX4lWQAmI8", m: "arena-store-1DYf-UURI", c: "arena", t: "Arena Esports store ad", f: "h", th: "7-BJW76buH.avif", cats: ["ads"] },
    { p: "drive", ref: "1gX5Y1FcGMkkzX0OD_F0eyqthRhv-6PnW", m: "arena-trio-1gX5Y1FcG", c: "arena", t: "Arena Esports trio ad", f: "h", th: "9-BYa4SDkK.avif", cats: ["ads"] },
    { p: "drive", ref: "1MIZWPFwTJy5wVDp6APHUL4A8TSTxbIvz", m: "swarmio-1MIZWPFwTJy5", c: "swarmio", t: "Swarmio platform ad", f: "h", th: "2-CKUVNq3j.avif", cats: ["ads"] },
    { p: "drive", ref: "1fU5GyLYgGpMOQ70-G3b2xF70EhgsznE8", m: "ggg-ad-1fU5GyLYgGpM", c: "ggg", t: "Globe Gamer Grounds platform ad", f: "h", th: "10-D7zIZ7Y4.avif", cats: ["ads"] },
    { p: "drive", ref: "1Nkg1M0EpqfLYB0E0Fizdv1p0ApmApTJ0", m: "g365-1Nkg1M0EpqfL", c: "g365", t: "365games general ad", f: "v", th: "12-C7eetfuZ.avif", cats: ["ads"] },
    { p: "fb", ref: "https://www.facebook.com/reel/1435410481075856", m: "claritin-1435410481075856", c: "claritin", t: "Claritin Arabia reel", f: "v", th: "4-DRRknzHW.avif", cats: ["ads"] },
    { p: "x", ref: "https://x.com/aldaejam/status/1594017369403248640", m: "cancel-x-1594017369403248640", c: "cancel", t: "CANCEL sponsored post", f: "h", th: "17-m1vNefhp.avif", cats: ["ads"] },

    /* ---------------- UGC ---------------- */
    { p: "drive", ref: "1NDUWJdPoyFtaNAOuFuJ6mYPN1xF7tdTF", m: "cc-purifier-1NDUWJdP", c: "cc", t: "Iconic air purifier", f: "h", th: "5-LsMkbmA8.avif", cats: ["ugc", "english"] },
    { p: "drive", ref: "1bZhVpL0ovO3cXcRzP_SPLZ-C87TWzRQk", m: "cc-glasses-1bZhVpL0", c: "cc", t: "Adjustable glasses", f: "h", th: "2-DVIQF_C_.avif", cats: ["ugc", "english"] },
    { p: "drive", ref: "12-LP9tfzuGyQT9gsopfrmNEVDjr3J7oP", m: "cc-heater-12-LP9tfz", c: "cc", t: "Portable heater", f: "h", th: "4-BUJIM3O-.avif", cats: ["ugc", "english"] },

    /* ---------------- PODCAST & TALKING HEAD ---------------- */
    { p: "yt", ref: "Q2m8f8n-vKs", d: "2025-05-15", c: "amados", t: "Amadòs Strategies podcast", f: "h", v: 871, sub: "podcast", cats: ["podcast", "english"] },
    { p: "yt", ref: "pQ1boyotNns", d: "2025-06-01", c: "amados", t: "Amadòs Strategies podcast", f: "h", v: 682, sub: "podcast", cats: ["podcast", "english"] },
    { p: "tt", ref: "7522954106890161416", m: "amados-7522954106890161416", url: "https://www.tiktok.com/@amados.strategies/video/7522954106890161416", c: "amados", t: "Amadòs Strategies clip", f: "v", th: "1-BRnkqPyp.avif", v: 794, sub: "podcast", cats: ["podcast"] },
    { p: "tt", ref: "7521756129647430919", url: "https://www.tiktok.com/@amados.strategies/video/7521756129647430919", c: "amados", t: "Amadòs Strategies clip", f: "v", th: "2-B3etdQN8.avif", v: 772, sub: "podcast", cats: ["podcast"] },
    { p: "yt", ref: "qZn0HEBTXuY", d: "2024-01-28", c: "etalks", t: "e-Talks podcast", f: "h", v: 1662, sub: "podcast", cats: ["podcast"] },
    { p: "ig", ref: "DaDLN0ylEOn", m: "sheikh-DaDLN0ylEOn", c: "sheikh", t: "العين حق… النبي ﷺ أكّد ذلك", f: "v", sub: "talking", cats: ["podcast"] },
    { p: "ig", ref: "Dapy6YQjjDh", m: "sheikh-Dapy6YQjjDh", c: "sheikh", t: "علاج السحر", f: "v", sub: "talking", cats: ["podcast"] },
    { p: "ig", ref: "DanRXuZjH7j", m: "sheikh-DanRXuZjH7j", c: "sheikh", t: "الغوّاص، العمّار، الأرضي، الطيّار", f: "v", sub: "talking", cats: ["podcast"] },
    { p: "ig", ref: "DaNqSW-iZeO", m: "sheikh-DaNqSW-iZeO", c: "sheikh", t: "الخرزة الزرقاء… حماية حقيقية ولا خرافة؟", f: "v", sub: "talking", cats: ["podcast"] },

    // documentaries (merged into Podcast, Talking Head & Documentary)
    { p: "yt", ref: "jGtL8l7NjCA", d: "2024-10-12", c: "reeng", t: "The Re-engineered Hope", f: "h", v: 2130, sub: "doc", cats: ["podcast"] },
    { p: "yt", ref: "I4GOsT57mDA", c: "reeng", t: "Gaza documentary film", f: "h", v: 60, sub: "doc", cats: ["podcast"] }
  ],
  designs: [
    { title: "Arab Woman Awards 2025", items: ["AWA1-BleA58Dk.avif", "AWA2-BhimR36z.avif", "AWA3-cUiX2-T4.avif", "AWA4-SH4mx0we.avif"] },
    { title: "Fortnite Middle East", logos: ["fortnite"], items: ["Fortnite1-BQijsVU9.avif", "Fortnite2-CiQuYIOU.avif", "Fortnite3-csPdXTeo.avif"] },
    { title: "PlayStation Arabia & VoltechFPS thumbnails", logos: ["ps", "voltech"], items: ["PlayStation-BEcxSDOt.avif", "VoltechFPS-Cis2Y5zI.avif"] }
  ],

  testimonials: [
    { name: "Sofyan", c: "sofyan", role: "YouTube creator · 1.15M subs", img: "11-iuG37D8w.avif", text: "Mohammed is easily one of the best editors I've ever worked with. What separates him from most editors is that he really knows how YouTube works. He uses his editing skills to keep the audience engaged throughout the video and create good retention. If you need an editor with really good YouTube knowledge, Mohammed is your guy!" },
    { name: "Bilal Shreif", role: "Director of Social Media & Digital Marketing", img: "BilalShreif-DmCigDm1.avif", text: "I highly recommend Hamed, not only for his top quality work, but also for his dedication and love for his profession, his patience with numerous edits and the speed of delivery. More than two years working together and he always strives to deliver better results." },
    { name: "Abdullah Al Daej", role: "Creator (CANCEL) · 462K subs", img: "Abdullahaldaej-SGnR_r33.avif", text: "I worked with Mohammed for nearly 2 years. He provided world-class editing that contributed to high growth in audience retention and engagement: a perfect combination of editing skills and a sense of humor, with a high level of professionalism." },
    { name: "Noof Abdulla", role: "eSports, GameDev & Project Consultant", img: "NoofAbdulla-DExgT7iF.avif", text: "He consistently demonstrated creativity, professionalism, and strong technical skills. One of his standout qualities is clearly understanding feedback and implementing revisions with a quick turnaround, while maintaining high quality." },
    { name: "Caio Borges", role: "Commercial Strategy Specialist, G2 Esports", img: "Caioborges-DLMU3n8I.avif", text: "Hamed surprised me positively. He is super proactive, has a wide range of skills and great knowledge of the MENA market and how to make videos more attractive for this region." },
    { name: "Nathany Rabello", role: "Marketing Operations & CRM Manager", img: "Nathany-CM16sGFZ.avif", text: "Creative, dedicated and thinks fast. For more than a year I could count on him to bring to life all the visual aspects of our marketing campaigns, especially highlights and community content." },
    { name: "Rokas Kavaliauskas", role: "Performance Creative Strategist", img: "RokasKavaliauskas-DOjYZBI-.avif", text: "A talented video editor with a sharp eye for detail and creativity. He always delivers polished, engaging work that elevates every project." },
    { name: "OFFSIDE", c: "offside", role: "YouTube channel", img: "13-BBRAWXzr.avif", text: "Your edit is so INSANE from what I've seen. Best video researcher out there, you're a legend bro!" },
    { name: "MySalahMat", c: "salahmat", role: "Brand", img: "16-DrlWbWeH.avif", text: "Your edit is so good, really impressed! Love the colours and transitions. Because it's for kids it will keep them interested." },
    { name: "Swarmio Media", c: "swarmio", role: "Client feedback", img: "12-DcupgvnY.avif", text: "The platform videos for GGG and OEZ were highly praised, especially GGG's video." },
    { name: "JellyPeanut", c: "jelly", role: "YouTube creator", img: "7-ZPB6xCmp.avif", text: "Honestly I love your work, I think it's really good." },
    { name: "B3shr", c: "b3shr", role: "YouTube creator · 1.83M subs", img: "4-BBV0zTTI.avif", text: "You are great! The video is amazing!" }
  ],

  /* Voice-note endorsements from the old site (files go in assets/audio/) */
  voice: [
    { name: "AboFlah", c: "aboflah", img: "1-B2FcuR_W.avif", audio: "aboflah.ogg" },
    { name: "Ahmed Show", c: "ahmedshow", img: "3-dDUw5hyc.avif", audio: "ahmedshow.ogg" },
    { name: "Aziz", c: "aziz", img: "2-Bhzu1VpD.avif", audio: "aziz.ogg" },
    { name: "CANCEL", c: "cancel", img: "6-fCsFgBUx.avif", audio: "cancel.ogg" }
  ],

  /* Full responsibilities (from the CV; replace with LinkedIn wording when available). */
  experience: [
    ["10/2026 – Present", "Video Editor (Freelance)", "BasicallyIDoWrk", [
      "Edited gaming videos weekly, adding subtitles when needed, in a funny and fast-paced style, both long and short form.",
      "The videos generated 100K+ views for each new content release."]],
    ["04/2026 – 10/2026", "Video Editor", "ROC Esports", [
      "Edited IRL challenges and vlog videos for 6 content creators, inspired by Sidemen and Beta Squad, managing and syncing multiple cameras and audio tracks, cleaning audio noise for each track manually, and color correcting.",
      "Created custom intros and animations, lower thirds, score counters, visual effects and graphics."]],
    ["09/2024 – 04/2026", "Video Editor (Freelance)", "ITP Media Group", [
      "Created Hideo Kojima's Riyadh 2025 Visit Highlights video.",
      "Edited the PlayStation Arabia Cooking Show series: 4 long-form videos and 12 short-form videos.",
      "Worked on Mazaj Hong Kong Trip S02, editing 6 long-form videos and 15 short-form videos.",
      "Edited the FC25 Challenge video for EA Middle East's YouTube channel, in collaboration with the Saudi Pro League (Roshn).",
      "Created an obstacle challenge video for the Spartan Middle East campaign, promoting their Dubai event, supported by sponsors including Dubai Parks and Resorts and the Dubai Sports Council.",
      "Designed graphic assets for the Arab Woman Awards 2025 and Spartan's first event in Dubai, and created multiple thumbnails for PlayStation Arabia's YouTube channel.",
      "Edited a promotional video for Mazaj's YouTube channel for their latest series, Perfection 101.",
      "Created and edited three reels for Claritin Arabia, showcasing their medical product line.",
      "Produced an internal case study video for Ulta Beauty."]],
    ["04/2024 – Present", "Social Media Video Editor (Freelance)", "The Esports & Gaming Agency – Middle East", [
      "Edited TikTok videos for the Call of Duty, Fortnite, Ubisoft, NVIDIA, Acer and Predator Arabic official accounts, including creative ideation, replay system recording and editing.",
      "Designed visual content for Fortnite Arabic social media pages (Instagram & X).",
      "Delivered trend-driven short-form content to boost audience engagement."]],
    ["10/2024 – 02/2025", "Video Editor (Freelance)", "CommerceCore", [
      "Created UGC advertising videos for multiple e-commerce products, optimized for Meta campaigns."]],
    ["10/2022 – 10/2024", "Video Editor", "Swarmio Media", [
      "Edited gaming marketing campaigns and ads for Arena Esports by e&, Ooredoo EZ and Globe Gamer Grounds.",
      "Produced corporate and event videos, including tutorials, highlight reels and trailers.",
      "Created trailers for a Riot Games collaboration, showcased at the Gamers8 Valorant & League of Legends tournaments."]],
    ["04/2019 – 11/2023", "Content Video Editor", "YouTube creators including AboFlah, Gamers React, OFFSIDE and Aziz", [
      "Edited 1,000+ videos across gaming, vlogs, football and viral content niches.",
      "Delivered 30+ videos on YouTube's #1 trending page, with one hitting 8.3M+ views.",
      "Helped clients surpass 1B+ cumulative views through optimized editing strategies.",
      "Collaborated with clients on advertising deals with major brands like Call of Duty Arabic, Burger King KSA, STC Play, MSI Gaming, Saudi Tourism Authority and many more."]]
  ],
  skills: ["Premiere Pro", "After Effects", "CapCut", "Photoshop", "Audition", "Multicam", "Sound design", "Motion graphics", "Thumbnails", "Claude", "ChatGPT", "Gemini", "ElevenLabs", "Magnific"],

  services: [
    ["Long-form YouTube", "Story structure, retention pacing, sound design and on-screen graphics for 8–30 minute videos."],
    ["Shorts, Reels & TikTok", "Hooks in the first second, captions and trend formats, cut native for each platform."],
    ["Brand & gaming campaigns", "Launches, event highlights and challenges delivered to agency specs and deadlines."],
    ["UGC & performance ads", "Variant-ready UGC edits for Meta and TikTok with fast iteration."],
    ["Motion graphics", "Intros, lower thirds, score counters and animated titles."],
    ["Thumbnails & social design", "YouTube thumbnails and event graphics that match the edit."]
  ]
};
