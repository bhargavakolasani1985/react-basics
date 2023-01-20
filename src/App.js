import logo from './logo.svg';
import './App.css';
import BasicFunction from './functional-comp/Basic-Func';
import FunctionProps from './functional-comp/Function-Props';
import FatArrowFunc from './functional-comp/FatArrow-Func';
import ClickEvent from './functional-comp/ClickEvent'
import DestructureProps from './functional-comp/DestructureProps';
import ParentFuncComp from './functional-comp/ParentFuncComp';
import NameListRender from './functional-comp/NameListRender';
import PersonNameListRender from './functional-comp/PersonNameListRender';
import StyleSheetRender from './functional-comp/StyleSheetRender';
import InlineStyleRender from './functional-comp/InlineStyleRender';
import FragmentDemo from './functional-comp/FragmentDemo';
import FragmentTableDemo from './functional-comp/FragmentTableDemo';

import BasicClass from './class-comp/Basic-Class';
import ClassProps from './class-comp/Class-Props';
import ClassState from './class-comp/Class-State';
import Counter from './class-comp/Counter';
import OnClickEvent from './class-comp/OnClickEvent';
import EventBind from './class-comp/EventBind';
import DestructureClassProps from './class-comp/DestructureClassProps';
import ParentClassComp from './class-comp/ParentClassComp';
import CondRender from './class-comp/CondRender';
import FormComp from './class-comp/FormComp';
import CompALifeCycle from './class-comp/CompALifeCycle';
import RegCompTest from './class-comp/RegCompTest';
import PureCompTest from './class-comp/PureCompTest';
import RegFuncCompTest from './class-comp/RegFuncCompTest';
import RefInClassComp from './class-comp/RefInClassComp';
import FocusInputComp from './class-comp/FocusInputComp';

import './appStyles.css';
import styles from './appStyles.module.css';

function App() {
  return (
    <div className="App">
      <table border="1">
        <tr>
          <td>
            <BasicFunction/>
            <FunctionProps name="KBC" age="35">Functional Component with properties...</FunctionProps>
            <FatArrowFunc/>
            <ClickEvent/>
            <DestructureProps name="KBC" age="35"/>
            <ParentFuncComp/>
            <NameListRender/>
            <PersonNameListRender/>
            <StyleSheetRender isPrimary={true}/>
            <InlineStyleRender/>
            <h1 className="error">Error</h1>
            <h1 className={styles.success}>Sucess</h1>
            <FragmentDemo/>
            <FragmentTableDemo/>
            {/*<RegFuncCompParent name="Bhargava"/>*/}
          </td>
          <td>
            <BasicClass/>
            <ClassProps name="KBC" age="35">Class Component with properties...</ClassProps>
            <ClassState/>
            <Counter/>
            <OnClickEvent/>
            <EventBind/>
            <DestructureClassProps name="KBC" age="35"/>
            <ParentClassComp/>
            <CondRender/>
            <FormComp/>
            {/*<CompALifeCycle/>
            <RegCompTest/>
            <PureCompTest/>
            <RegFuncCompTest/>
            <RefInClassComp/>*/}
            <FocusInputComp/>
          </td>
        </tr>
      </table> 
    </div>
  );
}

export default App;
