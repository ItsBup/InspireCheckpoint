export class Quote {
  constructor(data) {
    this.quote = data.content || ''
    this.author = data.author || ''
  }

  get quoteCard() {
    const quoteContent = this.quote || 'No quote available.'
    // FIXME interpolate author in the correct spot
    return `
      <div class="quote-card">
        <p class="mb-0 quote-text" title="${this.author}"><small>${quoteContent}</small></p>
        <p class="author-text">${this.author}</p>
      </div>
    `;
  }
}