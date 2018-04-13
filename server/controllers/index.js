const index = async(ctx) => {
	await ctx.render('index.html', {
	});
}

module.exports = {
	'GET /': index,
}