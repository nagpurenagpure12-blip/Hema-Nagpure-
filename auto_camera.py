import bpy, os
path='C:/story_images/'
files=os.listdir(path)
for i,f in enumerate(files):
 bpy.ops.import_image.to_plane(files=[{'name':f}], directory=path)
 obj=bpy.context.object
 obj.location=(0,i*2,0)
cam=bpy.data.objects['Camera']
cam.location=(0,-5,2)
for i in range(1,300):
 cam.location.y+=0.03
 cam.keyframe_insert(data_path='location', frame=i)