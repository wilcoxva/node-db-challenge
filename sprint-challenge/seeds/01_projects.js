exports.seed = async function(knex) {
	await knex("projects").insert([   
		{ name: "Sprint Challenge", description: "End of the unit challenge", completed: "false", tasks_id: 1 },
    { name: "Build Something", description: "Build something with your imagination", completed: "true", tasks_id: 5 },
    { name: "Another Project", description: "<Insert other project info here>", completed: "false", tasks_id: 3 },
    { name: "Something Creative", description: "Maybe paint?", completed: "true", tasks_id: 2 },
    { name: "School Work", description: "An assignment that must be turned in", completed: "false", tasks_id: 4 },
	])
}
