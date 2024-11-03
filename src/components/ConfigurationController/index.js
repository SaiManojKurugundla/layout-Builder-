import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showContent,
        showLeftNavbar,
        showRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }
      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div className="layout-section">
          <h1>Layout</h1>
          <div>
            <input
              id="Content"
              type="checkbox"
              onChange={onChangeContent}
              checked={showContent}
            />
            <label htmlFor="Content">Content</label>
          </div>
          <div>
            <input
              id="LeftNavBar"
              type="checkbox"
              onChange={onChangeLeftNavbar}
              checked={showLeftNavbar}
            />
            <label htmlFor="LeftNavBar">Left Navbar</label>
          </div>
          <div>
            <input
              id="RightNavBar"
              type="checkbox"
              onChange={onChangeRightNavbar}
              checked={showRightNavbar}
            />
            <label htmlFor="RightNavBar">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
