define([
  'jquery',     // lib/jquery/jquery
  'underscore', // lib/underscore/underscore
  'backbone',    // lib/backbone/backbone
  'inspector_json',
  'pouchvision',
], function($, _, Backbone, InspectorJSON, PouchVision){
  PouchVision.Views.DocView = Backbone.View.extend({

    template: JST['doc/doc'],

    tagName: 'div',

    className: 'vision-doc-container',

    initialize: function(options) {
    },

    events: {
      'dragstart .vision-doc': 'onDragStart',
      'click .vision-doc' : 'onClick'
    },

    onDragStart: function(e) {
      console.log('Document dragging started');
      e.originalEvent.dataTransfer.effectAllowed = 'move';
      e.originalEvent.dataTransfer.setData('text/plain',
          JSON.stringify(this.model.get('doc'), null, ' '));
    },

    onClick: function(e) {
      this.$el.find('.vision-popup-container').toggleClass('gone');
      this.$el.find('.vision-doc').toggleClass('selected');
    },

    render: function() {

      var color = (Math.abs(this.model.get('id').hashCode() % 0xFFFFFF)).toString(16);

      while (color.length < 6) { color += '0' }

      this.$el.html(this.template({ title: 'Document' }));

      var visionDoc = this.$el.find('.vision-doc');
      visionDoc.attr('draggable', true);
      visionDoc.find('.vision-doc-color').css('background-color', '#' + color);

      if (this.inspector)
        this.inspector.destroy();
      this.inspector = new InspectorJSON({
        element: this.$el.find('.vision-popup')
      })
      this.inspector.view(JSON.stringify(this.model.toJSON(), null, ' '));

      return this;
    },

  })

  String.prototype.hashCode = function(){
      var hash = 0;
      if (this.length == 0) return hash;
      for (i = 0; i < this.length; i++) {
          char = this.charCodeAt(i);
          hash = ((hash<<5)-hash)+char;
          hash = hash & hash; // Convert to 32bit integer
      }
      return hash;
  }


  return PouchVision;
});






