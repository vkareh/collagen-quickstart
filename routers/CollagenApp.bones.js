router = routers.Collagen.extend({
    routes: {
        'about': 'about'
    }
});

router.prototype.about = function() {
    this.send(views.Page, {template: 'About'});
}
