/* Billboard  Fragment shader implementation */
// Renaming variables passed from the Vertex Shader
vec3 color = vertexColorVSOutput.rgb;
vec3 point = normalizedVertexMCVSOutput;
fragOutput0 = vec4(color, 1.);
