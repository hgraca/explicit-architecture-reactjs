class GistDTO {
  constructor(
    id,
    name,
    description,
    createdAt,
    owner,
    isFork,
    isPublic,
    pushedAt,
    resourcePath,
    updatedAt,
    url,
    viewerHasStarred
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.createdAt = createdAt;
    this.owner = owner;
    this.isFork = isFork;
    this.isPublic = isPublic;
    this.pushedAt = pushedAt;
    this.resourcePath = resourcePath;
    this.updatedAt = updatedAt;
    this.url = url;
    this.viewerHasStarred = viewerHasStarred;
  }
}

export default GistDTO;
