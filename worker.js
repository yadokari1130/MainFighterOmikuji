addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
	let fighers_en = [
		"mario",
		"donkey_kong",
		"link",
		"samus",
		"dark_samus",
		"yoshi",
		"kirby",
		"fox",
		"pikachu",
		"luigi",
		"ness",
		"captain_falcon",
		"purin",
		"peach",
		"daisy",
		"koopa",
		"ice_climber",
		"sheik",
		"zelda",
		"dr_mario",
		"pichu",
		"falco",
		"marth",
		"lucina",
		"young_link",
		"ganondorf",
		"mewtwo",
		"roy",
		"chrom",
		"mr_game_and_watch",
		"meta_knight",
		"pit",
		"black_pit",
		"zero_suit_samus",
		"wario",
		"snake",
		"ike",
		"pokemon_trainer",
		"diddy_kong",
		"lucas",
		"sonic",
		"dedede",
		"pikmin_and_olimar",
		"lucario",
		"robot",
		"toon_link",
		"wolf",
		"murabito",
		"rockman",
		"wii_fit_trainer",
		"rosetta_and_chiko",
		"little_mac",
		"gekkouga",
		"mii_fighter",
		"mii_fighter",
		"mii_fighter",
		"palutena",
		"pac_man",
		"reflet",
		"shulk",
		"koopa_jr",
		"duck_hunt",
		"ryu",
		"ken",
		"cloud",
		"kamui",
		"bayonetta",
		"inkling",
		"ridley",
		"simon",
		"richter",
		"king_k_rool",
		"shizue",
		"gaogaen",
		"packun_flower",
		"joker",
		"dq_hero",
		"banjo_and_kazooie",
		"terry",
		"byleth",
		"minmin",
		"steve",
		"sephiroth",
		"homura",
		"kazuya",
		"sora"
	]

	const response = await fetch("https://yadokari1130.github.io/MainFighterOmikuji")
	let html = await response.text()
	
		
	const params = new URLSearchParams(new URL(request.url).search)
	if (params.get("num") !== null && params.get("color") !== null) {	
		const imageURL = "https://www.smashbros.com/assets_v2/img/fighter/" + fighers_en[params.get("num")] +"/main" + (params.get("color") !== "1" ? params.get("color") : "") + ".png"
		html = html.replace('content="REPLACE_FIGHTER_IMAGE"', `content="${imageURL}"`)
	}

	return new Response(html, {
		headers: { 'Content-Type': 'text/html' },
		status: 200,
	})
}
