function Publish() {
  return (
    <section className="admin-form-section">
      <h2>Publish Product</h2>

      <form className="admin-product-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input type="file" id="image" name="image" accept="image/*" required />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price" min="0" step="0.01" required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" rows="3" required />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input type="text" id="category" name="category" required />
        </div>
        <button className="admin-btn">Publish Product</button>
      </form>

    </section>
  );
}

export default Publish;