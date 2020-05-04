exports.seed = async function(knex) {
	await knex("tasks").insert([   
		{ description: "Complete the challenges in the sprint", notes: "Maximum three hours", completed: "false" },
    { description: "Paint a picture", notes: "Wear a smock", completed: "true" },
    { description: "Use Adobe Photoshop", notes: "Get creative", completed: "false" },
    { description: "Use a pencil and paper", notes: "No pens allowed", completed: "true" },
    { description: "Saw wood", notes: "Be careful", completed: "false" },
	])
}
