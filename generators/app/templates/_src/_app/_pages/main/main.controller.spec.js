/*
    This file includes an example test 
    for main component controllerusing es6
*/

// load the target module for test
import mainModule from './main.module';

describe('Main component controller',() => {
    // load the module
    beforeEach(angular.mock.module(mainModule.name));

    let $componentController;

    // Initialize the component`s controller provider
    beforeEach(() => {
        angular.mock.inject(_$componentController_ => {
            $componentController = _$componentController_;
        });
    });

    it('AwesomeThings has been defined', () => {        
        let mainComponentCtrl = $componentController('main', null, {});
        expect(mainComponentCtrl.awesomeThings).toBeDefined();
    });

    it('AwesomeThings has 3 elements', () => {        
        let mainComponentCtrl = $componentController('main', null, {});
        expect(mainComponentCtrl.awesomeThings.length).toEqual(3);
    });
  });