



export default function Team() {
  return (
    <div className="container py-5">
      <h1 className="display-5 fw-bold text-center mb-4">Our Team</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src="assets/img/landing/corporate/team/1.jpg" className="card-img-top" alt="Team Member 1" />
            <div className="card-body">
              <h5 className="card-title">John Doe</h5>
              <p className="card-text">Founder &amp; CEO</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="assets/img/landing/corporate/team/2.jpg" className="card-img-top" alt="Team Member 2" />
            <div className="card-body">
              <h5 className="card-title">Jane Doe</h5>
              <p className="card-text">Co-Founder &amp; CTO</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="assets/img/landing/corporate/team/3.jpg" className="card-img-top" alt="Team Member 3" />
            <div className="card-body">
              <h5 className="card-title">Bob Smith</h5>
              <p className="card-text">Software Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
