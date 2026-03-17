export default function AdminPanel() {

  return (

    <div style={{maxWidth:"1000px",margin:"80px auto"}}>

      <h1>MoonRiseStories Admin Panel</h1>

      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"30px",marginTop:"40px"}}>

        <div style={{border:"1px solid #ddd",padding:"20px"}}>
          <h2>User Management</h2>
          <p>View and manage platform users.</p>
          <button>Manage Users</button>
        </div>

        <div style={{border:"1px solid #ddd",padding:"20px"}}>
          <h2>Revenue Analytics</h2>
          <p>View platform earnings and sales.</p>
          <button>View Revenue</button>
        </div>

        <div style={{border:"1px solid #ddd",padding:"20px"}}>
          <h2>Content Moderation</h2>
          <p>Review reported novels and chapters.</p>
          <button>Moderate Content</button>
        </div>

        <div style={{border:"1px solid #ddd",padding:"20px"}}>
          <h2>Payout Approval</h2>
          <p>Approve writer withdrawal requests.</p>
          <button>Review Payouts</button>
        </div>

      </div>

    </div>

  )

}
