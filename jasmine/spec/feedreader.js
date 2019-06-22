/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

  /* TEST SUITE 1: "RSS Feeds" */

  describe('RSS Feeds', function() {
    /* TEST CASE 1:
     * It tests to make sure that the allFeeds variable
     * has been defined and that it is not empty.
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* TEST CASE 2:
     * It tests to make sure that has a URL defined
     * and that the URL is not empty.
     */

    it(' URL is defined  and it is not empty', function() {
      allFeeds.forEach(function(feed) {
        var presentURL = feed.url;
        //make sure it's not undefined
        expect(presentURL).not.toBe(undefined);
        //make sure it's not an empty string
        expect(presentURL).not.toBe('');
      });
    });
    /* TEST CASE 3:
     * It tests to make sure that has a name defined
     * and that the name is not empty.
     */

    it(' Name is defined and it is not empty', function() {
      allFeeds.forEach(function(feed) {
        var presentName = feed.name;
        //make sure it's not undefined
        expect(presentName).not.toBe(undefined);
        //make sure it's not an empty string
        expect(presentName).not.toBe('');
      });
    });
  });

  // TEST SUITE 2: "The menu"
  describe('The menu', function() {

    /* TEST CASE 1:
     * It tests to make sure that the menu element is
     * hidden by default.
     */
    it('menu element is hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    /*TEST CASE 2:
     * It tests to make sure that the menu changes
     * visibility when the menu icon is clicked.
     */
    it('changes visibility when is clicked', function() {
      var menuIcon = $('.menu-icon-link');
      menuIcon.click();
      expect($('body').hasClass('menu-hidden')).toBe(false);
      menuIcon.click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });
// TEST CASE 3:
  describe('Initial Entries', function () {

    /* TEST CASE 1:
         * It tests to make sure that the loadFeed function is
         * called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

     //do the async shuffle!
     beforeEach(function (done) {
       loadFeed(0, done);
     });

     it('contain at least a single .entry element within the .feed container', function (done) {
       var elem = ($('.feed .entry'));
       //if there is at least one element with an 'entry' class, that means it is defined.
       expect(elem.length).toBeGreaterThan(0);
       done();
     });


   });

  // TEST SUITE 4:"New Feed Selection"
  describe("New Feed Selection", function() {

    /* TEST CASE :
     * It tests to make sure that when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     */
    var first;
    var second;
    beforeEach(function(done) {
      loadFeed(0, function() {

        // Load and store previous Feed data
        first = document.getElementsByClassName('feed')[0].innerHTML;
        loadFeed(1, function() {
          // Load and store new Feed data
          second = document.getElementsByClassName('feed')[0].innerHTML;
          // Start tests

          done();
        });
      });
    });
    it('initial entry differ', function() {
      expect(first).not.toBe(second);
    });

  });
}());
