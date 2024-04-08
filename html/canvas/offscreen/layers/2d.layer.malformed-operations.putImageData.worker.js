// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.layer.malformed-operations.putImageData
// Description:Check that exceptions are thrown for operations that are malformed while layers are open.
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

test(t => {
  var canvas = new OffscreenCanvas(200, 200);
  var ctx = canvas.getContext('2d');

  const canvas2 = new OffscreenCanvas(200, 200);
  const ctx2 = canvas2.getContext('2d')
  const data = ctx2.getImageData(0, 0, 1, 1);
  // Shouldn't throw on its own.
  ctx.putImageData(data, 0, 0);
  // Make sure the exception isn't caused by calling the function twice.
  ctx.putImageData(data, 0, 0);
  // Calling again inside a layer should throw.
  ctx.beginLayer();
  assert_throws_dom("InvalidStateError",
                    () => ctx.putImageData(data, 0, 0));
}, "Check that exceptions are thrown for operations that are malformed while layers are open.");
done();
