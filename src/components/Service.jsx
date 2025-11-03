

function Service(props) {
  return (
    <div className="service-list">
      {
        props.serviceList.map((item, index) => {
          return (
            <div className="service-section" key={index}>
              <img src={item.image} />
            </div>
          )
        })
      }
    </div>
  )
}



export default Service
