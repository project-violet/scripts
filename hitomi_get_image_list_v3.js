// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 0;
switch (g) {
case 145:
case 3570:
case 2110:
case 3975:
case 1863:
case 3435:
case 661:
case 802:
case 31:
case 49:
case 546:
case 488:
case 0:
case 1930:
case 2329:
case 3814:
case 3231:
case 355:
case 1470:
case 1217:
case 3439:
case 2071:
case 1546:
case 77:
case 1484:
case 1172:
case 1744:
case 3427:
case 422:
case 3584:
case 2412:
case 2396:
case 2777:
case 1357:
case 2508:
case 3786:
case 1304:
case 243:
case 639:
case 813:
case 2673:
case 451:
case 297:
case 2494:
case 45:
case 3344:
case 864:
case 1406:
case 3051:
case 3022:
case 3360:
case 3575:
case 2115:
case 771:
case 501:
case 2788:
case 900:
case 3704:
case 3757:
case 987:
case 3681:
case 4088:
case 2955:
case 2119:
case 1479:
case 257:
case 311:
case 2062:
case 3083:
case 1939:
case 2908:
case 3984:
case 3920:
case 3525:
case 909:
case 3794:
case 3215:
case 1588:
case 3488:
case 1496:
case 2457:
case 146:
case 6:
case 2569:
case 10:
case 1818:
case 2833:
case 2641:
case 764:
case 982:
case 1977:
case 3219:
case 2193:
case 2944:
case 1750:
case 1429:
case 252:
case 2370:
case 3996:
case 87:
case 1988:
case 789:
case 807:
case 3210:
case 1911:
case 3520:
case 4046:
case 2682:
case 416:
case 22:
case 3925:
case 396:
case 337:
case 2891:
case 4027:
case 2735:
case 1032:
case 1243:
case 1614:
case 4039:
case 2131:
case 702:
case 1708:
case 1394:
case 1151:
case 1122:
case 2306:
case 572:
case 3929:
case 2021:
case 2052:
case 2623:
case 1755:
case 2965:
case 648:
case 3477:
case 427:
case 2544:
case 4035:
case 2746:
case 739:
case 2154:
case 3441:
case 3781:
case 2107:
case 2391:
case 2005:
case 607:
case 2879:
case 1702:
case 67:
case 1541:
case 449:
case 911:
case 2013:
case 848:
case 874:
case 218:
case 3236:
case 2914:
case 1200:
case 224:
case 3901:
case 1669:
case 2009:
case 300:
case 3249:
case 3753:
case 761:
case 3189:
case 3657:
case 2611:
case 1848:
case 995:
case 1523:
case 1660:
case 1209:
case 1213:
case 567:
case 3808:
case 119:
case 1698:
case 1812:
case 2677:
case 4016:
case 3180:
case 2773:
case 2992:
case 183:
case 1353:
case 3855:
case 285:
case 3501:
case 2224:
case 671:
case 1867:
case 1276:
case 3078:
case 3056:
case 1582:
case 2870:
case 562:
case 2068:
case 3844:
case 1573:
case 3138:
case 2164:
case 4082:
case 2646:
case 2627:
case 1886:
case 2140:
case 3898:
case 3667:
case 454:
case 7:
case 996:
case 4023:
case 3392:
case 3416:
case 1491:
case 3763:
case 2782:
case 1659:
case 1187:
case 1295:
case 1226:
case 1247:
case 3028:
case 2502:
case 167:
case 2418:
case 382:
case 3207:
case 2837:
case 583:
case 2047:
case 438:
case 730:
case 3314:
case 2285:
case 1650:
case 328:
case 2136:
case 309:
case 2630:
case 956:
case 494:
case 3066:
case 2896:
case 1804:
case 689:
case 2099:
case 1080:
case 2289:
case 2453:
case 610:
case 507:
case 288:
case 2106:
case 1351:
case 2771:
case 1194:
case 164:
case 1552:
case 29:
case 3296:
case 1288:
case 3086:
case 3910:
case 1098:
case 1419:
case 251:
case 872:
case 2854:
case 3237:
case 2807:
case 2265:
case 981:
case 3503:
case 1383:
case 3885:
case 4071:
case 3656:
case 3678:
case 3150:
case 746:
case 3519:
case 2179:
case 2605:
case 1167:
case 102:
case 3874:
case 845:
case 98:
case 1624:
case 2170:
case 3510:
case 998:
case 2762:
case 1952:
case 3722:
case 2260:
case 2717:
case 2184:
case 2472:
case 189:
case 2932:
case 1069:
case 457:
case 2244:
case 1277:
case 3919:
case 3004:
case 3057:
case 113:
case 1112:
case 360:
case 3824:
case 1674:
case 1562:
case 17:
case 325:
case 2303:
case 1361:
case 801:
case 2483:
case 1971:
case 3332:
case 3462:
case 1887:
case 2626:
case 331:
case 2315:
case 3094:
case 3160:
case 3284:
case 3993:
case 2422:
case 3144:
case 1680:
case 2699:
case 1517:
case 1246:
case 384:
case 1230:
case 3931:
case 1962:
case 3169:
case 3206:
case 2836:
case 3012:
case 3634:
case 619:
case 2125:
case 216:
case 2690:
case 1104:
case 1571:
case 3275:
case 1689:
case 1157:
case 2196:
case 2849:
case 1055:
case 227:
case 80:
case 877:
case 4021:
case 2897:
case 3628:
case 1856:
case 2250:
case 3761:
case 1493:
case 1917:
case 1685:
case 2845:
case 1732:
case 513:
case 1059:
case 1872:
case 334:
case 819:
case 2985:
case 1:
case 633:
case 2617:
case 3651:
case 2709:
case 249:
case 2580:
case 1738:
case 2466:
case 2336:
case 960:
case 3954:
case 3499:
case 370:
case 2989:
case 3018:
case 1595:
case 2705:
case 1547:
case 2810:
case 1526:
case 1968:
case 2758:
case 4009:
case 2776:
case 1356:
case 2574:
case 3787:
case 3447:
case 1378:
case 710:
case 418:
case 677:
case 2662:
case 1002:
case 4013:
case 2345:
case 2819:
case 601:
case 1454:
case 2585:
case 1999:
case 2016:
case 917:
case 2803:
case 3832:
case 2202:
case 3507:
case 3778:
case 381:
case 3756:
case 2815:
case 1926:
case 767:
case 2700:
case 2589:
case 148:
case 1590:
case 2073:
case 2340:
case 3490:
case 358:
case 2974:
case 926:
case 3545:
case 3940:
case 912:
case 2082:
case 2133:
case 1118:
case 3374:
case 867:
case 3597:
case 1181:
case 1913:
case 2938:
case 161:
case 3728:
case 1632:
case 2893:
case 1785:
case 4068:
case 645:
case 3661:
case 1445:
case 3549:
case 3400:
case 2768:
case 1976:
case 984:
case 2924:
case 1153:
case 1500:
case 1789:
case 254:
case 2790:
case 1449:
case 1905:
case 3564:
case 3413:
case 4095:
case 4047:
case 238:
case 3945:
case 379:
case 1223:
case 1440:
case 240:
case 1509:
case 1513:
case 1464:
case 1334:
case 574:
case 548:
case 2191:
case 925:
case 1558:
case 2307:
case 2354:
case 486:
case 1092:
case 3405:
case 16:
case 2643:
case 2795:
case 931:
case 1883:
case 3385:
case 530:
case 2726:
case 783:
case 1323:
case 386:
case 3099:
case 3453:
case 2991:
case 1675:
case 1888:
case 3896:
case 1811:
case 878:
case 2694:
case 1100:
case 1553:
case 606:
case 2869:
case 3301:
case 3829:
case 921:
case 2533:
case 64:
case 3026:
case 1228:
case 890:
case 935:
case 3837:
case 3502:
case 3481:
case 282:
case 3418:
case 759:
case 2028:
case 1542:
case 1158:
case 3820:
case 2416:
case 1341:
case 3782:
case 165:
case 2667:
case 3274:
case 92:
case 3646:
case 992:
case 4063:
case 3627:
case 2034:
case 3164:
case 3723:
case 3090:
case 1918:
case 2860:
case 129:
case 3068:
case 2844:
case 850:
case 1414:
case 1620:
case 1563:
case 1147:
case 2302:
case 605:
case 1126:
case 1045:
case 2056:
case 2078:
case 3224:
case 1835:
case 1791:
case 2174:
case 2482:
case 120:
case 2240:
case 2423:
case 4042:
case 2686:
case 3677:
case 3238:
case 3000:
case 1839:
case 2604:
case 4018:
case 48:
case 1696:
case 1040:
case 3914:
case 2901:
case 324:
case 623:
case 1168:
case 3013:
case 565:
case 3076:
case 2185:
case 899:
case 1256:
case 957:
case 2850:
case 3592:
case 1316:
case 3005:
case 3391:
case 2718:
case 508:
case 1637:
case 529:
case 2477:
case 823:
case 2937:
case 3486:
case 43:
case 3746:
case 412:
case 3623:
case 1330:
case 3021:
case 1015:
case 593:
case 1117:
case 1784:
case 3306:
case 576:
case 1162:
case 484:
case 2350:
case 3379:
case 3969:
case 1770:
case 32:
case 175:
case 2520:
case 699:
case 3891:
case 4012:
case 1019:
case 403:
case 1904:
case 2210:
case 3960:
case 3043:
case 3232:
case 321:
case 3944:
case 4048:
case 2529:
case 2203:
case 1335:
case 3641:
case 3833:
case 1465:
case 2355:
case 1327:
case 2488:
case 425:
case 1557:
case 2215:
case 1171:
case 1504:
case 1706:
case 256:
case 659:
case 1339:
case 3908:
case 211:
case 841:
case 3320:
case 2892:
case 2618:
case 4057:
case 4004:
case 3955:
case 3119:
case 2681:
case 768:
case 3103:
case 1912:
case 1737:
case 1796:
case 1594:
case 3711:
case 2653:
case 650:
case 176:
case 2430:
case 918:
case 2360:
case 2575:
case 3115:
case 2970:
case 575:
case 3494:
case 924:
case 1823:
case 3325:
case 417:
case 2427:
case 806:
case 1311:
case 3508:
case 2786:
case 1512:
case 2979:
case 1251:
case 1222:
case 2439:
case 2369:
case 2231:
case 3329:
case 255:
case 1283:
case 1720:
case 1459:
case 1994:
case 1567:
case 723:
case 84:
case 1948:
case 426:
case 3337:
case 985:
case 1691:
case 4086:
case 2435:
case 3726:
case 409:
case 2936:
case 428:
case 720:
case 3747:
case 3214:
case 3643:
case 2201:
case 394:
case 693:
case 2949:
case 1263:
case 1424:
case 1610:
case 3191:
case 1587:
case 1116:
case 865:
case 3538:
case 3799:
case 340:
case 2389:
case 1390:
case 1817:
case 2409:
case 279:
case 1438:
case 1368:
case 2413:
case 2564:
case 2997:
case 2766:
case 1956:
case 653:
case 354:
case 2734:
case 3768:
case 1987:
case 144:
case 3652:
case 4028:
case 2549:
case 1395:
case 766:
case 2102:
case 3938:
case 2728:
case 2374:
case 1556:
case 3133:
case 463:
case 1754:
case 1603:
case 2545:
case 2063:
case 3974:
case 3434:
case 866:
case 99:
case 258:
case 2490:
case 1253:
case 4056:
case 4078:
case 1309:
case 3815:
case 1313:
case 2468:
case 1736:
case 988:
case 1358:
case 1376:
case 2778:
case 675:
case 199:
case 1745:
case 2832:
case 1693:
case 3980:
case 1281:
case 3585:
case 951:
case 2233:
case 2683:
case 642:
case 1843:
case 2426:
case 95:
case 3758:
case 2787:
case 1182:
case 544:
case 578:
case 400:
case 3810:
case 915:
case 3705:
case 2291:
case 2499:
case 2053:
case 1566:
case 820:
case 590:
case 3466:
case 1300:
case 991:
case 4087:
case 2651:
case 2279:
case 2761:
case 3250:
case 1922:
case 1343:
case 3845:
case 1070:
case 2628:
case 3897:
case 3129:
case 776:
case 2165:
case 1654:
case 212:
case 1607:
case 3310:
case 842:
case 473:
case 3137:
case 3035:
case 2593:
case 1703:
case 2275:
case 1188:
case 3196:
case 3849:
case 1248:
case 954:
case 1294:
case 2169:
case 1084:
case 1800:
case 2931:
case 3039:
case 168:
case 2471:
case 3840:
case 1075:
case 3255:
case 1551:
case 541:
case 269:
case 3451:
case 3422:
case 2772:
case 3030:
case 666:
case 1321:
case 1352:
case 2094:
case 2666:
case 2838:
case 3315:
case 1813:
case 3208:
case 2160:
case 938:
case 1876:
case 456:
case 3120:
case 4072:
case 1079:
case 3743:
case 2462:
case 2270:
case 225:
case 3303:
case 2824:
case 753:
case 1710:
case 1146:
case 2903:
case 1572:
case 1664:
case 2155:
case 2057:
case 2004:
case 505:
case 4083:
case 949:
case 3244:
case 3472:
case 3260:
case 2751:
case 3932:
case 1029:
case 1895:
case 1731:
case 2783:
case 2220:
case 2159:
case 3658:
case 4051:
case 3676:
case 4022:
case 1135:
case 2874:
case 495:
case 14:
case 2678:
case 2656:
case 3179:
case 2519:
case 2229:
case 1645:
case 3461:
case 665:
case 2503:
case 1362:
case 2885:
case 217:
case 351:
case 893:
case 2237:
case 3807:
case 432:
case 2515:
case 1257:
case 2086:
case 2225:
case 39:
case 41:
case 2889:
case 608:
case 3106:
case 3771:
case 742:
case 455:
case 1868:
case 1636:
case 1130:
case 3566:
case 906:
case 462:
case 3123:
case 3480:
case 359:
case 2273:
case 3740:
case 4024:
case 2872:
case 3300:
case 1617:
case 2599:
case 2:
case 1580:
case 2738:
case 1336:
case 1758:
case 2968:
case 1397:
case 1776:
case 1101:
case 1574:
case 554:
case 2378:
case 4038:
case 635:
case 2002:
case 3843:
case 3033:
case 1705:
case 2990:
case 885:
case 3182:
case 1810:
case 2526:
case 2861:
case 419:
case 1202:
case 3745:
case 3485:
case 62:
case 3376:
case 3358:
case 404:
case 786:
case 3966:
case 2387:
case 3528:
case 2407:
case 3141:
case 483:
case 2454:
case 1016:
case 1980:
case 1803:
case 3218:
case 3253:
case 3749:
case 3489:
case 1974:
case 594:
case 2568:
case 3534:
case 3313:
case 1815:
case 824:
case 274:
case 1671:
case 2590:
case 3821:
case 261:
case 2497:
case 1456:
case 1478:
case 1893:
case 2785:
case 2909:
case 2445:
case 718:
case 390:
case 1082:
case 2118:
case 4089:
case 1133:
case 3754:
case 3619:
case 3707:
case 2153:
case 886:
case 3399:
case 154:
case 2789:
case 378:
case 1621:
case 344:
case 636:
case 3871:
case 239:
case 2958:
case 2976:
case 3987:
case 3615:
case 2366:
case 1799:
case 2223:
case 2509:
case 2780:
case 4074:
case 3390:
case 467:
case 1538:
case 2334:
case 2464:
case 3438:
case 785:
case 2822:
case 3817:
case 138:
case 2900:
case 1214:
case 3862:
case 2883:
case 1726:
case 2328:
case 1487:
case 2774:
case 2558:
case 1307:
case 2576:
case 3116:
case 1041:
case 26:
case 2552:
case 19:
case 3890:
case 2148:
case 2211:
case 3204:
case 2098:
case 3868:
case 3636:
case 2322:
case 2351:
case 2943:
case 2194:
case 1269:
case 1461:
case 1331:
case 857:
case 999:
case 341:
case 3697:
case 1807:
case 2403:
case 792:
case 1170:
case 1658:
case 1393:
case 15:
case 516:
case 34:
case 2167:
case 2543:
case 202:
case 3037:
case 2624:
case 3096:
case 2277:
case 3664:
case 472:
case 1011:
case 897:
case 213:
case 3146:
case 3025:
case 306:
case 3127:
case 3961:
case 1260:
case 1472:
case 1717:
case 289:
case 2069:
case 3371:
case 1613:
case 2638:
case 3079:
case 2431:
case 797:
case 1647:
case 2887:
case 743:
case 736:
case 1319:
case 3710:
case 2674:
case 2562:
case 27:
case 207:
case 1840:
case 3075:
case 280:
case 3551:
case 3522:
case 3177:
case 1699:
case 1255:
case 3212:
case 477:
case 2246:
case 892:
case 40:
case 3813:
case 1315:
case 1030:
case 1422:
case 2239:
case 3321:
case 3809:
case 3248:
case 1027:
case 55:
case 1125:
case 2571:
case 1690:
case 2157:
case 1849:
case 1196:
case 2055:
case 3188:
case 2230:
case 515:
case 3983:
case 1039:
case 4032:
case 3715:
case 3294:
case 1668:
case 1836:
case 2856:
case 1129:
case 271:
case 2685:
case 3070:
case 1845:
case 3343:
case 2059:
case 1137:
case 305:
case 3703:
case 127:
case 1035:
case 591:
case 3719:
case 3654:
case 990:
case 1310:
case 2128:
case 1879:
case 3629:
case 2702:
case 4:
case 993:
case 2665:
case 3316:
case 1154:
case 262:
case 1107:
case 2342:
case 3733:
case 1005:
case 2134:
case 3040:
case 3625:
case 366:
case 2982:
case 1611:
case 1688:
case 3064:
case 976:
case 4002:
case 1013:
case 2038:
case 2894:
case 118:
case 1806:
case 2200:
case 1914:
case 3830:
case 1009:
case 2698:
case 3827:
case 3199:
case 794:
case 1773:
case 1992:
case 2941:
case 2353:
case 2644:
case 219:
case 616:
case 849:
case 1884:
case 3097:
case 2258:
case 2276:
case 586:
case 3195:
case 448:
case 3563:
case 3414:
case 3620:
case 2401:
case 1870:
case 3045:
case 3126:
case 1716:
case 1514:
case 2205:
case 2318:
case 3835:
case 1224:
case 430:
case 1164:
case 2299:
case 3918:
case 688:
case 840:
case 2886:
case 1627:
case 210:
case 838:
case 4014:
case 3266:
case 329:
case 3113:
case 3701:
case 2659:
case 3542:
case 1820:
case 3158:
case 3176:
case 439:
case 894:
case 2247:
case 651:
case 1274:
case 524:
case 3054:
case 1635:
case 3953:
case 1442:
case 2491:
case 365:
case 1782:
case 1026:
case 3228:
case 1047:
case 1095:
case 3518:
case 1829:
case 2156:
case 1301:
case 1285:
case 3402:
case 2973:
case 1481:
case 2433:
case 942:
case 46:
case 3888:
case 691:
case 2804:
case 4092:
case 1099:
case 1825:
case 3323:
case 1289:
case 2290:
case 1453:
case 1136:
case 1630:
case 3100:
case 3994:
case 4060:
case 85:
case 3459:
case 2262:
case 2470:
case 1110:
case 3691:
case 815:
case 3882:
case 1337:
case 1467:
case 1412:
case 1508:
case 3311:
case 1325:
case 3823:
case 136:
case 1950:
case 2760:
case 3251:
case 1555:
case 1071:
case 891:
case 353:
case 2546:
case 3408:
case 2172:
case 3512:
case 376:
case 3725:
case 2530:
case 638:
case 89:
case 1448:
case 3377:
case 402:
case 4065:
case 1711:
case 3594:
case 2386:
case 1494:
case 3121:
case 888:
case 2406:
case 1017:
case 2271:
case 640:
case 2769:
case 2479:
case 3031:
case 3450:
case 3729:
case 1062:
case 1320:
case 489:
case 2161:
case 592:
case 3912:
case 1103:
case 2927:
case 3841:
case 1550:
case 347:
case 1119:
case 2765:
case 3327:
case 2496:
case 2312:
case 47:
case 3346:
case 233:
case 1569:
case 649:
case 816:
case 2853:
case 1730:
case 2252:
case 543:
case 536:
case 79:
case 1193:
case 2750:
case 3261:
case 1960:
case 1565:
case 3779:
case 1370:
case 1043:
case 135:
case 2881:
case 1833:
case 2692:
case 2977:
case 3986:
case 2367:
case 3010:
case 1998:
case 788:
case 2032:
case 2759:
case 2183:
case 1131:
case 3019:
case 12:
case 1891:
case 192:
case 1965:
case 1623:
case 2755:
case 1544:
case 557:
case 3498:
case 1486:
case 2708:
case 2394:
case 3586:
case 4059:
case 1306:
case 2122:
case 2151:
case 715:
case 3272:
case 471:
case 3330:
case 2719:
case 112:
case 2654:
case 1067:
case 205:
case 1593:
case 3685:
case 1279:
case 3493:
case 1761:
case 4015:
case 3732:
case 2343:
case 3856:
case 371:
case 560:
case 795:
case 2715:
case 1206:
case 3372:
case 184:
case 2800:
case 3689:
case 3157:
case 1275:
case 3104:
case 4019:
case 1634:
case 1012:
case 1144:
case 169:
case 1417:
case 71:
case 1772:
case 2321:
case 3239:
case 2809:
case 1094:
case 732:
case 1666:
case 1284:
case 1160:
case 1048:
case 873:
case 755:
case 380:
case 2075:
case 223:
case 3186:
case 4010:
case 3517:
case 2522:
case 3680:
case 2805:
case 1531:
case 896:
case 3674:
case 2710:
case 526:
case 2858:
case 131:
case 3887:
case 687:
case 3431:
case 3050:
case 1462:
case 1332:
case 1270:
case 9:
case 2139:
case 3638:
case 3866:
case 4031:
case 796:
case 1722:
case 1108:
case 1880:
case 2025:
case 206:
case 2146:
case 2899:
case 2127:
case 2572:
case 1903:
case 1919:
case 493:
case 313:
case 2286:
case 584:
case 2037:
case 476:
case 3624:
case 3543:
case 682:
case 2029:
case 2731:
case 1783:
case 1220:
case 3952:
case 2847:
case 756:
case 1237:
case 1678:
case 453:
case 811:
case 3828:
case 1150:
case 2645:
case 2793:
case 1503:
case 2362:
case 2020:
case 1885:
case 3383:
case 3322:
case 3351:
case 2317:
case 663:
case 3943:
case 1421:
case 3194:
case 364:
case 525:
case 2868:
case 2636:
case 4093:
case 2130:
case 1515:
case 1910:
case 3211:
case 2204:
case 2649:
case 126:
case 3521:
case 2890:
case 531:
case 1889:
case 2263:
case 36:
case 1405:
case 1949:
case 907:
case 3576:
case 3558:
case 97:
case 1476:
case 3328:
case 1936:
case 558:
case 3900:
case 1201:
case 1385:
case 3883:
case 2817:
case 3822:
case 1672:
case 1540:
case 1945:
case 1413:
case 1564:
case 2978:
case 3464:
case 980:
case 3780:
case 1389:
case 2390:
case 787:
case 3958:
case 2987:
case 244:
case 278:
case 1549:
case 814:
case 2871:
case 3153:
case 1734:
case 1374:
case 3118:
case 2578:
case 2707:
case 3181:
case 1597:
case 1964:
case 2603:
case 1940:
case 1545:
case 2395:
case 2001:
case 3909:
case 1661:
case 570:
case 1102:
case 361:
case 2326:
case 700:
case 1728:
case 3590:
case 374:
case 2852:
case 2821:
case 1468:
case 2313:
case 3926:
case 1338:
case 782:
case 2736:
case 3947:
case 330:
case 2253:
case 1490:
case 158:
case 714:
case 2305:
case 709:
case 1324:
case 2528:
case 4049:
case 3407:
case 887:
case 1507:
case 181:
case 1778:
case 637:
case 696:
case 1832:
case 2474:
case 3163:
case 2934:
case 1081:
case 4064:
case 2242:
case 2033:
case 1018:
case 3595:
case 198:
case 2843:
case 2631:
case 763:
case 1426:
case 3378:
case 1787:
case 1114:
case 3356:
case 3738:
case 2928:
case 134:
case 1622:
case 1651:
case 1499:
case 170:
case 2480:
case 2566:
case 1907:
case 2123:
case 1954:
case 2460:
case 2330:
case 658:
case 2015:
case 3708:
case 2586:
case 4070:
case 2784:
case 2117:
case 3122:
case 3151:
case 2444:
case 511:
case 1712:
case 1477:
case 405:
case 196:
case 1663:
case 1925:
case 3842:
case 2019:
case 681:
case 825:
case 1210:
case 760:
case 2162:
case 1061:
case 3420:
case 831:
case 3977:
case 1219:
case 83:
case 423:
case 967:
case 3881:
case 812:
case 1529:
case 377:
case 2335:
case 3818:
case 242:
case 4006:
case 3429:
case 2261:
case 1537:
case 1215:
case 884:
case 2557:
case 1794:
case 1308:
case 2504:
case 3511:
case 4079:
case 1596:
case 532:
case 1072:
case 51:
case 156:
case 2469:
case 333:
case 346:
case 634:
case 1488:
case 803:
case 555:
case 1411:
case 2633:
case 2841:
case 293:
case 1892:
case 372:
case 3765:
case 1681:
case 2912:
case 962:
case 2737:
case 4025:
case 573:
case 1984:
case 3161:
case 2450:
case 111:
case 2729:
case 3939:
case 1083:
case 1360:
case 1430:
case 3769:
case 3271:
case 4029:
case 537:
case 2594:
case 1398:
case 2725:
case 3475:
case 3935:
case 2408:
case 3527:
case 3484:
case 2222:
case 441:
case 919:
case 1369:
case 1439:
case 731:
case 3539:
case 2455:
case 2388:
case 3304:
case 3798:
case 860:
case 2311:
case 1446:
case 983:
case 3357:
case 2948:
case 556:
case 769:
case 1975:
case 2882:
case 1435:
case 3535:
case 3930:
case 2459:
case 2567:
case 2994:
case 1906:
case 2606:
case 3268:
case 1066:
case 114:
case 1694:
case 109:
case 3916:
case 781:
case 3290:
case 2942:
case 2888:
case 3857:
case 933:
case 1648:
case 977:
case 90:
case 3433:
case 1865:
case 3363:
case 1533:
case 3178:
case 2581:
case 3650:
case 2679:
case 450:
case 1416:
case 1763:
case 1124:
case 265:
case 3491:
case 2105:
case 3226:
case 3247:
case 1028:
case 478:
case 2670:
case 1591:
case 3659:
case 901:
case 2176:
case 3085:
case 2158:
case 1860:
case 208:
case 626:
case 1138:
case 2113:
case 3573:
case 2109:
case 2684:
case 879:
case 2266:
case 1844:
case 3608:
case 587:
case 78:
case 2877:
case 310:
case 1034:
case 2981:
case 3299:
case 3089:
case 2918:
case 779:
case 88:
case 3205:
case 2835:
case 1742:
case 1482:
case 2620:
case 3582:
case 2147:
case 2563:
case 1859:
case 3258:
case 1056:
case 834:
case 3213:
case 582:
case 3209:
case 3523:
case 1855:
case 2049:
case 4091:
case 1686:
case 2827:
case 3698:
case 1180:
case 1264:
case 2846:
case 3669:
case 2168:
case 1189:
case 2696:
case 100:
case 2373:
case 3134:
case 669:
case 2963:
case 2625:
case 1781:
case 2316:
case 3923:
case 2492:
case 1718:
case 3342:
case 972:
case 631:
case 2256:
case 563:
case 1850:
case 3128:
case 625:
case 3702:
case 1245:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1771243201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,];
var gg_b = "1771243201/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
