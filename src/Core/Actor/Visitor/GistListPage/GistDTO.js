class GistDTO {
  constructor({ node: { id, name, description, createdAt, owner: { login } } }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.createdAt = createdAt;
    this.owner = login;
  }
}

export default GistDTO
