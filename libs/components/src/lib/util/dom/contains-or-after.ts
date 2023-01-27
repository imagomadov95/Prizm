export function prizmContainsOrAfter(current: Node, node: Node): boolean {
  return (
    current.contains(node) || !!(node.compareDocumentPosition(current) & Node.DOCUMENT_POSITION_PRECEDING)
  );
}
