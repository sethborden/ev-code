(function() {
   angular.module('app')
   .controller('ScenarioController', scenarioController);
    
    scenarioController.$inject = ['evScenarios'];
    function scenarioController(evScenarios) {
        var vm = this;
        this.scenarios = evScenarios.scenarios;
        this.capStructures = evScenarios.capStructs;
        this.assets = evScenarios.assets;
        this.stress = evScenarios.stress;

        this.scenarioOne = undefined;
        this.scenarioTwo = undefined;
        this.scenarioThree = undefined;

        this.activeTab = 0;
        this.getAsset = function(id) {
            return this.assets.filter(function(a) {
                return a.id === id;
            });
        };
        this.getCap = function(id) {
            return this.capStructures.filter(function(c) {
                return c.id == id;
            });
        };
        this.getStress = function(id) {
            return this.stress.filter(function(p) {
                return p.id === id;
            });
        };
        return vm;
    }

})();
