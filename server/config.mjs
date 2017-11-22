export default function getConfigVar(key) {
  return process.env[key] || ''
}
