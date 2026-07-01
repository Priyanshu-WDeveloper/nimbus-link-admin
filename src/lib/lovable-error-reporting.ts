export function reportLovableError(
  _error: Error,
  _context?: Record<string, unknown>,
) {
  console.error('Unhandled error:', _error, _context);
}
