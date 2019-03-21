SwfWindow("Health Insurance Demo").SwfEdit("textAmount").Set "1200" @@ hightlight id_;_67380_;_script infofile_;_ZIP::ssf15.xml_;_
SwfWindow("Health Insurance Demo").SwfButton("Enter Claim").Click

SwfWindow("Health Insurance Demo").SwfEditor("textResponse").Check CheckPoint("textResponse")
For i = 1 To 3 
	SwfWindow("Health Insurance Demo").SwfButton("Next").Click
	SwfWindow("Health Insurance Demo").SwfButton("Enter Claim").Click
	Datatable.SetNextRow
	SwfWindow("Health Insurance Demo").SwfEditor("textResponse").Check CheckPoint("textResponse")
Next

'Reset to first claim
For i = 1 To 3
SwfWindow("Health Insurance Demo").SwfButton("Previous").Click @@ hightlight id_;_67144_;_script infofile_;_ZIP::ssf19.xml_;_
Next
'Test
'Test3
