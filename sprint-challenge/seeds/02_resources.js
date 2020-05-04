exports.seed = async function(knex) {
	await knex("resources").insert([   
		{ name: "person", description: "A human being" },
    { name: "tool", description: "Hammer, wrench, etc." },
    { name: "meeting room", description: "Self explanatory" },
    { name: "software license", description: "Such as MS Office" },
    { name: "paint", description: "Physical or computer generated" },
	])
}
