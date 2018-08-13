import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'
import {createSerializer} from 'enzyme-to-json'

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}))
configure({ adapter: new Adapter() })
