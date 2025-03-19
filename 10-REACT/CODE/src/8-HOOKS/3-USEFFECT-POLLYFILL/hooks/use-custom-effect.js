import React, { useRef } from 'react';

const useEffectPollyfill = (effect, deps) => {
  //now effect is itself is the callback of the function
  // const cleanup=effect()
  // print the event triggered and the callback anonymoust function
  const isFirstRender = useRef(true);
  // useref value persist through re render of the components
  // in useState whenever the component re initialise state lost its track and back to the true
  const prevDeps = useRef([]);
  //FIRST RENDER
  if (isFirstRender.current) {
    isFirstRender.current = false;
    const cleanup = effect();
    // which stored it here the "cleaed here"
    return () => {
      if (cleanup && typeof cleanup === 'function') {
        cleanup();
        // print the "cleaned" here
        // const cleanup=effect
        // which consist of the log which prints the event trigggered and the callback function
        // which stored in the variable "cleanup"
        // when we invoked the cleanup it prints the "cleared" the clean up fucntion
        // for the very first time
      }
    };
  }
  // DEPENDENCY CHANGES AND NO DEPENDENCY ARRAY
  console.log(deps, prevDeps.current, 'here'); //both are unequal
  // 0 , []
  // 1!=2
  // 2!=3
  // when i send [] to the pollyfill event triggered for the first because of true
  // then [] which is prevDeps and now [] is the deps is equal
  // if !true is false
  // if deps yes deps is []
  // then do []!==[] is false effect not run
  const depsChanged = deps
    ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current)
    : true;
  // true?true
  // first true count is send as the dependecy array and when the count updated here prev count is 1 and now 2 is not equal and acc to condition yes it not equal true if
  // if the dependency is not there means there is not dependecy then it become true and render in every single rendered means every single updation of the component useeffect runs
  // if dependency array exists
  // true because for the empty dependency compare the prev dependency
  console.log(depsChanged, 'changed');
  const cleanup = effect();
  // same it here
  if (depsChanged) {
    if (cleanup && (typeof cleanup === 'function') & deps) {
      cleanup();
    }
    // cleanup are run when the state updated and the component unmounts
    // means on the first render
    // and the state is updated in the dependency array
    //
    // invoked either dependency is changed or dependency is empty providing true
  }
  // CLEANUP
  prevDeps.current = deps || [];
  // 2===2 here we intials the prevdeps with the current deps
  // which means after the next updataion the deps become 3 and the prevdeps become because of this line
};

export default useEffectPollyfill;
