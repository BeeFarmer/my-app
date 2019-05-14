import React from 'react'
class Error extends React.Component
{
  constructor(props)
  {
    super(props);
  }
  render() {
    return (
      <div className = "not-found">
        <h1>Error 404!</h1>
      </div>
    )
  }
}
export default Error
