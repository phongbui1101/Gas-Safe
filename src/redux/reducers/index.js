import ThemeReducer from "./ThemeReducer"
import DataChartReducer from "./DataChartReducer"
import { ElectricStatusReducer } from "./ElectricStatusReducer"
import { DataTableReducers } from "./DataTableReducers"
import { combineReducers } from "redux"

const rootReducer = combineReducers({ ThemeReducer, DataChartReducer, ElectricStatusReducer, DataTableReducers })

export default rootReducer