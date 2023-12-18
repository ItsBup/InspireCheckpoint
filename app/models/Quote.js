export class Quote {
  constructor(data) {
    this.quote = data.content || ''
    this.author = data.author || ''
  }

  get quoteCard() {
    const quoteContent = this.quote || 'No quote available.'
    return `
      <div class="quote-card">
        <p class="mb-0 quote-text" title="${this.author}"><small>${quoteContent}</small></p>
      </div>
    `;
  }
}