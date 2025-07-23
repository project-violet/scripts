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
case 469:
case 187:
case 2385:
case 1757:
case 2569:
case 453:
case 1908:
case 1575:
case 3993:
case 4013:
case 2472:
case 3380:
case 115:
case 1487:
case 488:
case 3194:
case 233:
case 1319:
case 3277:
case 924:
case 1049:
case 940:
case 2543:
case 3905:
case 1789:
case 2390:
case 4020:
case 2715:
case 568:
case 614:
case 3727:
case 3307:
case 718:
case 2959:
case 1459:
case 1483:
case 2983:
case 1400:
case 2012:
case 3395:
case 1751:
case 2922:
case 2257:
case 3520:
case 1088:
case 2558:
case 3886:
case 2460:
case 1960:
case 3534:
case 1748:
case 2095:
case 419:
case 282:
case 3884:
case 4078:
case 3465:
case 996:
case 2792:
case 518:
case 664:
case 2686:
case 3042:
case 2253:
case 2894:
case 3085:
case 362:
case 303:
case 1215:
case 2896:
case 789:
case 3301:
case 823:
case 2080:
case 1883:
case 1859:
case 2230:
case 635:
case 328:
case 3672:
case 874:
case 2039:
case 101:
case 3235:
case 980:
case 3608:
case 1533:
case 134:
case 1887:
case 1514:
case 641:
case 736:
case 1537:
case 3829:
case 1332:
case 1516:
case 1697:
case 2808:
case 147:
case 1238:
case 2129:
case 3066:
case 1679:
case 890:
case 749:
case 1193:
case 1724:
case 1994:
case 30:
case 2494:
case 839:
case 1726:
case 3064:
case 1274:
case 1306:
case 395:
case 82:
case 1105:
case 3756:
case 1197:
case 2652:
case 3484:
case 192:
case 179:
case 536:
case 2860:
case 3486:
case 1822:
case 1855:
case 2641:
case 155:
case 3030:
case 1766:
case 2658:
case 3239:
case 17:
case 2035:
case 2732:
case 1764:
case 2813:
case 1444:
case 2944:
case 965:
case 1056:
case 2820:
case 3858:
case 2586:
case 570:
case 2834:
case 3931:
case 1862:
case 2836:
case 2584:
case 1206:
case 1609:
case 3825:
case 309:
case 491:
case 2143:
case 246:
case 196:
case 3613:
case 3117:
case 726:
case 3136:
case 2266:
case 3933:
case 1675:
case 2125:
case 2647:
case 3843:
case 2878:
case 22:
case 3611:
case 371:
case 3120:
case 2141:
case 3134:
case 2264:
case 2158:
case 2802:
case 239:
case 842:
case 1150:
case 3869:
case 625:
case 338:
case 2324:
case 3678:
case 3113:
case 2706:
case 2811:
case 770:
case 1870:
case 3914:
case 4094:
case 3602:
case 2326:
case 732:
case 3788:
case 3051:
case 2389:
case 3048:
case 3425:
case 1917:
case 3371:
case 2436:
case 2073:
case 1133:
case 78:
case 2962:
case 1934:
case 2434:
case 3201:
case 2420:
case 1920:
case 1315:
case 3441:
case 366:
case 1913:
case 2077:
case 3761:
case 2552:
case 1785:
case 2357:
case 4008:
case 1021:
case 41:
case 173:
case 2719:
case 3399:
case 2798:
case 2290:
case 3057:
case 934:
case 3763:
case 1470:
case 2411:
case 2529:
case 3207:
case 543:
case 2099:
case 1593:
case 3508:
case 2018:
case 1023:
case 882:
case 4060:
case 3749:
case 3373:
case 1010:
case 2402:
case 1902:
case 46:
case 1614:
case 2351:
case 2242:
case 3053:
case 1027:
case 1616:
case 1505:
case 1597:
case 1298:
case 3917:
case 3133:
case 2925:
case 2310:
case 1425:
case 581:
case 4005:
case 1051:
case 3844:
case 2522:
case 1441:
case 2958:
case 2795:
case 2568:
case 514:
case 867:
case 668:
case 2409:
case 1909:
case 1761:
case 3082:
case 3116:
case 3428:
case 3045:
case 3137:
case 1399:
case 3114:
case 2780:
case 689:
case 373:
case 90:
case 3021:
case 1572:
case 3470:
case 2288:
case 1057:
case 1469:
case 2969:
case 2321:
case 1447:
case 2837:
case 484:
case 2144:
case 3614:
case 885:
case 2559:
case 1767:
case 3131:
case 2261:
case 564:
case 2712:
case 1203:
case 618:
case 3597:
case 2146:
case 2943:
case 2015:
case 3505:
case 3219:
case 2662:
case 1634:
case 649:
case 355:
case 3766:
case 3828:
case 507:
case 37:
case 1596:
case 3175:
case 2850:
case 221:
case 1617:
case 962:
case 903:
case 2431:
case 1931:
case 3204:
case 3376:
case 1102:
case 1841:
case 3056:
case 2038:
case 1613:
case 3446:
case 3374:
case 3206:
case 541:
case 3650:
case 152:
case 735:
case 2356:
case 804:
case 324:
case 677:
case 1117:
case 707:
case 1933:
case 3232:
case 2074:
case 1120:
case 2670:
case 622:
case 476:
case 3338:
case 1678:
case 2416:
case 444:
case 1113:
case 636:
case 3109:
case 1847:
case 420:
case 3150:
case 49:
case 3870:
case 405:
case 831:
case 1672:
case 430:
case 2687:
case 3883:
case 3859:
case 626:
case 3533:
case 499:
case 1608:
case 2897:
case 1235:
case 427:
case 301:
case 3179:
case 2805:
case 598:
case 2004:
case 334:
case 3887:
case 3514:
case 2683:
case 2256:
case 2254:
case 632:
case 2168:
case 2893:
case 2006:
case 700:
case 3537:
case 3332:
case 278:
case 1108:
case 2681:
case 3996:
case 4037:
case 3276:
case 1066:
case 3679:
case 3730:
case 4014:
case 3274:
case 3306:
case 195:
case 245:
case 2187:
case 1660:
case 3994:
case 10:
case 2984:
case 1865:
case 2546:
case 3197:
case 3105:
case 525:
case 1339:
case 694:
case 1754:
case 798:
case 2159:
case 1486:
case 2183:
case 3691:
case 2100:
case 2929:
case 3063:
case 1273:
case 2493:
case 4050:
case 3319:
case 315:
case 2799:
case 1380:
case 1905:
case 2405:
case 3789:
case 1997:
case 2497:
case 2282:
case 267:
case 2245:
case 1710:
case 1277:
case 3400:
case 1307:
case 3483:
case 1502:
case 3240:
case 2221:
case 3748:
case 643:
case 2367:
case 1886:
case 3960:
case 1534:
case 2349:
case 1520:
case 1090:
case 1218:
case 2479:
case 1979:
case 860:
case 2965:
case 1465:
case 3481:
case 1299:
case 909:
case 1884:
case 1085:
case 2491:
case 1042:
case 1991:
case 285:
case 2210:
case 2777:
case 1271:
case 2555:
case 1782:
case 2363:
case 1513:
case 2528:
case 1301:
case 3215:
case 1452:
case 1721:
case 3550:
case 217:
case 2019:
case 162:
case 103:
case 3528:
case 3227:
case 2550:
case 2468:
case 1968:
case 3019:
case 1684:
case 1896:
case 2215:
case 3952:
case 3491:
case 908:
case 1894:
case 3555:
case 2061:
case 3363:
case 3965:
case 946:
case 1792:
case 1095:
case 1007:
case 1525:
case 1558:
case 3349:
case 3773:
case 2748:
case 3562:
case 3367:
case 2422:
case 2751:
case 265:
case 2088:
case 1257:
case 1959:
case 873:
case 4062:
case 2483:
case 939:
case 1186:
case 1012:
case 2400:
case 1900:
case 1715:
case 3221:
case 990:
case 3497:
case 1543:
case 2753:
case 1390:
case 61:
case 1184:
case 2067:
case 3771:
case 133:
case 1001:
case 2398:
case 1987:
case 2487:
case 3361:
case 2063:
case 287:
case 1569:
case 1385:
case 1342:
case 1547:
case 3493:
case 1738:
case 2822:
case 3100:
case 279:
case 3159:
case 2691:
case 3986:
case 551:
case 1652:
case 3984:
case 986:
case 3879:
case 3546:
case 3187:
case 3622:
case 2994:
case 3735:
case 2726:
case 799:
case 2996:
case 3681:
case 1:
case 2868:
case 2304:
case 1129:
case 2276:
case 304:
case 3893:
case 1808:
case 1152:
case 13:
case 3254:
case 3168:
case 751:
case 896:
case 2332:
case 3006:
case 2514:
case 1872:
case 691:
case 3004:
case 1366:
case 498:
case 3659:
case 3256:
case 2693:
case 3181:
case 1774:
case 2533:
case 2179:
case 201:
case 1039:
case 4046:
case 3805:
case 3897:
case 1165:
case 1224:
case 855:
case 3122:
case 572:
case 530:
case 2800:
case 2883:
case 1230:
case 1776:
case 933:
case 1811:
case 2870:
case 59:
case 3416:
case 357:
case 544:
case 1264:
case 1802:
case 576:
case 2338:
case 3670:
case 1141:
case 240:
case 1878:
case 3076:
case 224:
case 1143:
case 2446:
case 2054:
case 146:
case 847:
case 1836:
case 982:
case 1586:
case 1834:
case 79:
case 675:
case 834:
case 1732:
case 2828:
case 3850:
case 321:
case 1147:
case 27:
case 2175:
case 2855:
case 255:
case 3170:
case 2766:
case 4081:
case 761:
case 2637:
case 464:
case 2505:
case 1478:
case 123:
case 3943:
case 3015:
case 2597:
case 1351:
case 1285:
case 3144:
case 3261:
case 3500:
case 2010:
case 1402:
case 1348:
case 2902:
case 2593:
case 4068:
case 1018:
case 2023:
case 584:
case 3816:
case 1099:
case 865:
case 1970:
case 3345:
case 2911:
case 1290:
case 3288:
case 3780:
case 2114:
case 3644:
case 1955:
case 3040:
case 2021:
case 273:
case 1552:
case 9:
case 2742:
case 3450:
case 2045:
case 1413:
case 1077:
case 2137:
case 3249:
case 2082:
case 3646:
case 2315:
case 3092:
case 3522:
case 3707:
case 2462:
case 4083:
case 669:
case 4000:
case 3795:
case 3958:
case 3925:
case 3310:
case 942:
case 2936:
case 1073:
case 310:
case 2790:
case 481:
case 1015:
case 2443:
case 950:
case 216:
case 803:
case 1833:
case 2280:
case 2203:
case 3348:
case 1559:
case 3071:
case 1500:
case 3242:
case 56:
case 2089:
case 2207:
case 160:
case 1837:
case 3529:
case 1816:
case 2295:
case 3018:
case 1321:
case 1947:
case 443:
case 2975:
case 2057:
case 1288:
case 48:
case 3290:
case 3970:
case 2763:
case 3719:
case 1040:
case 76:
case 1703:
case 3955:
case 1780:
case 904:
case 1249:
case 4029:
case 3413:
case 1568:
case 1450:
case 812:
case 1409:
case 3357:
case 2560:
case 2201:
case 1707:
case 1831:
case 1327:
case 2051:
case 3389:
case 110:
case 3565:
case 2788:
case 3417:
case 2425:
case 1414:
case 2335:
case 2602:
case 483:
case 3324:
case 2847:
case 157:
case 2869:
case 1128:
case 2678:
case 1416:
case 856:
case 3330:
case 3643:
case 1670:
case 1739:
case 271:
case 32:
case 1162:
case 80:
case 1074:
case 3802:
case 2117:
case 967:
case 713:
case 1433:
case 3266:
case 2933:
case 2136:
case 559:
case 502:
case 1356:
case 2843:
case 3817:
case 2613:
case 3143:
case 3946:
case 470:
case 2841:
case 1655:
case 3944:
case 1431:
case 2102:
case 672:
case 3625:
case 759:
case 121:
case 2636:
case 2026:
case 702:
case 2617:
case 917:
case 763:
case 3641:
case 2620:
case 2030:
case 374:
case 1662:
case 699:
case 2024:
case 1159:
case 620:
case 1183:
case 1100:
case 2339:
case 1544:
case 436:
case 3738:
case 1546:
case 256:
case 1879:
case 2484:
case 637:
case 838:
case 3652:
case 2660:
case 1891:
case 3494:
case 1622:
case 871:
case 295:
case 1187:
case 104:
case 706:
case 2066:
case 3:
case 3364:
case 329:
case 960:
case 2829:
case 33:
case 397:
case 809:
case 3152:
case 1256:
case 3872:
case 55:
case 2235:
case 3629:
case 1805:
case 3774:
case 1181:
case 2160:
case 1122:
case 2672:
case 3224:
case 1952:
case 2452:
case 921:
case 262:
case 203:
case 1019:
case 3684:
case 2513:
case 1528:
case 3080:
case 2301:
case 1098:
case 1777:
case 1555:
case 2271:
case 2782:
case 2085:
case 418:
case 2991:
case 3289:
case 3686:
case 2536:
case 2884:
case 1479:
case 2979:
case 1223:
case 3792:
case 1965:
case 2465:
case 684:
case 2520:
case 3257:
case 1562:
case 1367:
case 3558:
case 788:
case 2534:
case 1773:
case 2727:
case 1221:
case 4041:
case 661:
case 3012:
case 2395:
case 4058:
case 3959:
case 2307:
case 3983:
case 2502:
case 2710:
case 489:
case 4025:
case 167:
case 2277:
case 2578:
case 3390:
case 2997:
case 1388:
case 2303:
case 3001:
case 2511:
case 1799:
case 588:
case 2380:
case 2723:
case 719:
case 3342:
case 2196:
case 3547:
case 3248:
case 553:
case 1259:
case 2830:
case 533:
case 610:
case 905:
case 1561:
case 1440:
case 3585:
case 3921:
case 937:
case 388:
case 3347:
case 3542:
case 920:
case 1009:
case 3791:
case 2580:
case 3477:
case 1654:
case 944:
case 1370:
case 2503:
case 3779:
case 976:
case 2992:
case 1492:
case 2041:
case 3590:
case 2378:
case 2272:
case 3624:
case 3034:
case 268:
case 2058:
case 2448:
case 2302:
case 2025:
case 1948:
case 3017:
case 3473:
case 2722:
case 319:
case 3358:
case 1876:
case 2759:
case 1362:
case 2043:
case 1415:
case 2453:
case 1953:
case 3797:
case 3471:
case 3325:
case 1874:
case 2047:
case 1075:
case 2135:
case 462:
case 403:
case 3126:
case 3923:
case 1563:
case 1281:
case 3499:
case 1772:
case 2501:
case 2260:
case 2313:
case 3011:
case 4085:
case 218:
case 1127:
case 3954:
case 2938:
case 306:
case 127:
case 1438:
case 1645:
case 199:
case 249:
case 2848:
case 1110:
case 1621:
case 3956:
case 2199:
case 984:
case 3651:
case 53:
case 3877:
case 3566:
case 375:
case 529:
case 2118:
case 1123:
case 1794:
case 3648:
case 2424:
case 1924:
case 3157:
case 1796:
case 35:
case 832:
case 1840:
case 870:
case 1930:
case 2430:
case 40:
case 1121:
case 495:
case 3653:
case 3689:
case 3286:
case 5:
case 3899:
case 1182:
case 222:
case 1016:
case 1627:
case 2177:
case 961:
case 2974:
case 3657:
case 858:
case 2294:
case 236:
case 2853:
case 1815:
case 2296:
case 2699:
case 151:
case 2539:
case 1344:
case 797:
case 2173:
case 883:
case 1033:
case 3148:
case 1649:
case 226:
case 313:
case 3714:
case 2906:
case 1406:
case 650:
case 3737:
case 1161:
case 508:
case 1244:
case 2612:
case 2107:
case 452:
case 409:
case 270:
case 3384:
case 3812:
case 3733:
case 471:
case 2890:
case 539:
case 2746:
case 774:
case 2112:
case 678:
case 52:
case 3642:
case 1149:
case 3807:
case 2084:
case 302:
case 3895:
case 1167:
case 1554:
case 822:
case 2464:
case 1964:
case 1688:
case 105:
case 2932:
case 1432:
case 2885:
case 137:
case 3524:
case 283:
case 438:
case 746:
case 3880:
case 631:
case 1966:
case 2466:
case 144:
case 294:
case 3803:
case 2571:
case 3365:
case 3589:
case 1527:
case 1228:
case 2213:
case 3949:
case 2360:
case 586:
case 3557:
case 3352:
case 3775:
case 3072:
case 3401:
case 3225:
case 1806:
case 1711:
case 723:
case 3166:
case 3963:
case 161:
case 2236:
case 2518:
case 2998:
case 3480:
case 2372:
case 1419:
case 2919:
case 2278:
case 193:
case 3243:
case 2442:
case 1091:
case 1521:
case 28:
case 2485:
case 4057:
case 3961:
case 3329:
case 685:
case 3247:
case 2139:
case 3666:
case 3269:
case 1720:
case 111:
case 2573:
case 1734:
case 3407:
case 1383:
case 3548:
case 818:
case 1717:
case 1736:
case 2211:
case 617:
case 4089:
case 4053:
case 930:
case 3778:
case 1589:
case 2743:
case 2000:
case 2059:
case 2449:
case 1949:
case 1967:
case 633:
case 510:
case 3322:
case 760:
case 2606:
case 1164:
case 2087:
case 1401:
case 1258:
case 3804:
case 3262:
case 11:
case 2747:
case 3368:
case 473:
case 4021:
case 1241:
case 1008:
case 3093:
case 1166:
case 1963:
case 2463:
case 4082:
case 214:
case 3806:
case 1243:
case 4023:
case 3419:
case 393:
case 3545:
case 975:
case 3582:
case 1403:
case 2106:
case 384:
case 3498:
case 710:
case 1961:
case 2461:
case 1329:
case 3521:
case 1709:
case 95:
case 2540:
case 3942:
case 1750:
case 948:
case 3383:
case 1548:
case 3300:
case 1495:
case 2995:
case 2758:
case 311:
case 480:
case 4027:
case 1664:
case 1988:
case 2488:
case 4010:
case 2725:
case 16:
case 3717:
case 1060:
case 3736:
case 3406:
case 2198:
case 521:
case 235:
case 2863:
case 1714:
case 3667:
case 2119:
case 113:
case 3244:
case 455:
case 3404:
case 1801:
case 854:
case 496:
case 2939:
case 3663:
case 191:
case 2867:
case 757:
case 919:
case 1386:
case 898:
case 2574:
case 1384:
case 1812:
case 4056:
case 629:
case 2214:
case 1642:
case 6:
case 1685:
case 3556:
case 2698:
case 2538:
case 2619:
case 163:
case 3167:
case 721:
case 1731:
case 988:
case 825:
case 642:
case 1094:
case 3432:
case 3964:
case 1530:
case 305:
case 344:
case 1803:
case 3966:
case 3163:
case 953:
case 3819:
case 969:
case 1096:
case 399:
case 608:
case 550:
case 1873:
case 778:
case 2786:
case 3127:
case 1954:
case 674:
case 2454:
case 106:
case 2046:
case 2115:
case 3682:
case 745:
case 1153:
case 2456:
case 1956:
case 2640:
case 2333:
case 372:
case 3794:
case 447:
case 1648:
case 1877:
case 1566:
case 2845:
case 841:
case 2882:
case 1651:
case 3930:
case 1564:
case 2532:
case 646:
case 3796:
case 3924:
case 298:
case 148:
case 1157:
case 1653:
case 3014:
case 1689:
case 1286:
case 2504:
case 545:
case 3121:
case 3610:
case 504:
case 1818:
case 3016:
case 62:
case 3627:
case 1899:
case 3182:
case 1871:
case 1657:
case 225:
case 479:
case 2331:
case 3033:
case 3623:
case 3476:
case 3344:
case 2827:
case 3815:
case 188:
case 1347:
case 1542:
case 2375:
case 3440:
case 1585:
case 1921:
case 2421:
case 3200:
case 2055:
case 415:
case 3561:
case 3259:
case 3656:
case 3283:
case 3370:
case 1982:
case 4063:
case 1013:
case 1477:
case 3654:
case 169:
case 2174:
case 3588:
case 1020:
case 1779:
case 2856:
case 1343:
case 785:
case 3951:
case 814:
case 2293:
case 1017:
case 717:
case 1036:
case 4049:
case 2973:
case 1626:
case 1229:
case 3948:
case 1341:
case 1252:
case 3154:
case 2138:
case 3362:
case 1358:
case 1325:
case 2971:
case 2291:
case 1705:
case 3953:
case 3156:
case 864:
case 2999:
case 517:
case 3281:
case 2279:
case 1126:
case 1418:
case 2676:
case 2423:
case 767:
case 913:
case 3075:
case 1265:
case 2309:
case 2674:
case 3222:
case 3708:
case 1793:
case 3328:
case 623:
case 1130:
case 2222:
case 2957:
case 1501:
case 1260:
case 3070:
case 2328:
case 2563:
case 811:
case 4019:
case 3423:
case 3918:
case 3676:
case 1317:
case 932:
case 565:
case 2874:
case 2989:
case 1453:
case 970:
case 2154:
case 3138:
case 2268:
case 1915:
case 2415:
case 1043:
case 1334:
case 2567:
case 2876:
case 2362:
case 861:
case 1451:
case 1722:
case 3293:
case 1448:
case 2948:
case 1507:
case 1272:
case 3856:
case 2492:
case 666:
case 3765:
case 3028:
case 3445:
case 3638:
case 1503:
case 3482:
case 2009:
case 2050:
case 515:
case 3752:
case 3421:
case 1824:
case 2561:
case 2033:
case 2476:
case 2623:
case 820:
case 844:
case 1539:
case 2344:
case 136:
case 805:
case 431:
case 579:
case 1974:
case 325:
case 3810:
case 478:
case 671:
case 3615:
case 2182:
case 3506:
case 2145:
case 122:
case 701:
case 2627:
case 2014:
case 177:
case 3140:
case 1671:
case 3316:
case 2930:
case 1430:
case 2924:
case 3821:
case 779:
case 1118:
case 792:
case 2794:
case 1199:
case 354:
case 4006:
case 3044:
case 230:
case 3456:
case 2110:
case 1171:
case 3333:
case 149:
case 3115:
case 1851:
case 3454:
case 2127:
case 227:
case 796:
case 2966:
case 2898:
case 194:
case 457:
case 1535:
case 1607:
case 183:
case 14:
case 237:
case 1464:
case 2964:
case 1101:
case 1932:
case 3538:
case 2554:
case 3698:
case 1744:
case 695:
case 989:
case 4076:
case 3619:
case 60:
case 1084:
case 2167:
case 1112:
case 1086:
case 755:
case 276:
case 1890:
case 2661:
case 3574:
case 1601:
case 341:
case 4038:
case 1107:
case 3849:
case 596:
case 3867:
case 1195:
case 2244:
case 1612:
case 555:
case 872:
case 830:
case 3231:
case 2161:
case 57:
case 2406:
case 1103:
case 628:
case 335:
case 2246:
case 421:
case 2667:
case 1394:
case 1490:
case 3592:
case 3488:
case 3397:
case 2736:
case 3725:
case 1211:
case 603:
case 662:
case 1573:
case 2734:
case 580:
case 3995:
case 2359:
case 2383:
case 1762:
case 949:
case 364:
case 1065:
case 211:
case 4015:
case 3741:
case 2713:
case 1864:
case 1442:
case 2091:
case 1308:
case 2942:
case 2521:
case 2985:
case 3068:
case 1278:
case 2419:
case 3106:
case 2387:
case 2498:
case 1866:
case 1577:
case 2545:
case 314:
case 2806:
case 922:
case 1029:
case 2804:
case 3132:
case 3769:
case 4040:
case 977:
case 3747:
case 612:
case 2702:
case 1213:
case 1360:
case 2097:
case 3209:
case 3515:
case 2527:
case 381:
case 3250:
case 3604:
case 3743:
case 936:
case 2778:
case 1571:
case 1725:
case 3211:
case 4071:
case 2060:
case 1592:
case 2988:
case 1397:
case 1632:
case 3490:
case 2269:
case 3139:
case 2666:
case 2247:
case 3065:
case 423:
case 2407:
case 516:
case 2495:
case 1995:
case 3485:
case 1540:
case 38:
case 3308:
case 3442:
case 2750:
case 3202:
case 3728:
case 3864:
case 1104:
case 3372:
case 1980:
case 665:
case 2403:
case 3755:
case 3998:
case 954:
case 4018:
case 2243:
case 1068:
case 3278:
case 343:
case 3919:
case 3217:
case 1463:
case 3029:
case 3639:
case 2166:
case 114:
case 4077:
case 3599:
case 2008:
case 3518:
case 1747:
case 21:
case 1769:
case 2352:
case 2164:
case 1901:
case 1132:
case 2839:
case 900:
case 615:
case 3360:
case 4073:
case 853:
case 1467:
case 1912:
case 3571:
case 1059:
case 888:
case 1083:
case 2589:
case 1379:
case 1743:
case 383:
case 3695:
case 2526:
case 679:
case 2096:
case 394:
case 2530:
case 3464:
case 358:
case 2094:
case 692:
case 1216:
case 1237:
case 259:
case 2731:
case 2807:
case 3603:
case 1538:
case 490:
case 3890:
case 2642:
case 1214:
case 3086:
case 439:
case 370:
case 3601:
case 848:
case 2733:
case 85:
case 332:
case 647:
case 3195:
case 3107:
case 1849:
case 2386:
case 634:
case 509:
case 2439:
case 2716:
case 474:
case 771:
case 2185:
case 4035:
case 3906:
case 3103:
case 135:
case 1198:
case 806:
case 1863:
case 3539:
case 1827:
case 2151:
case 100:
case 3296:
case 556:
case 1331:
case 3976:
case 3618:
case 2871:
case 1192:
case 3294:
case 336:
case 914:
case 2899:
case 1506:
case 2818:
case 863:
case 595:
case 3857:
case 728:
case 640:
case 2689:
case 1821:
case 248:
case 3424:
case 1692:
case 2564:
case 1316:
case 1532:
case 2877:
case 275:
case 756:
case 1845:
case 891:
case 1314:
case 154:
case 43:
case 2648:
case 2435:
case 1935:
case 497:
case 3426:
case 70:
case 1333:
case 1784:
case 795:
case 2189:
case 2956:
case 1044:
case 206:
case 1115:
case 655:
case 4039:
case 964:
case 3851:
case 3313:
case 1729:
case 680:
case 2130:
case 1674:
case 3457:
case 2124:
case 86:
case 1676:
case 1918:
case 3069:
case 2126:
case 712:
case 907:
case 3135:
case 2265:
case 2499:
case 562:
case 4080:
case 3489:
case 2325:
case 1971:
case 2471:
case 3336:
case 4007:
case 3759:
case 3334:
case 3700:
case 2358:
case 4095:
case 219:
case 3320:
case 3915:
case 2252:
case 2341:
case 1138:
case 3595:
case 762:
case 2017:
case 2626:
case 3448:
case 3302:
case 3025:
case 3507:
case 3722:
case 1293:
case 512:
case 1854:
case 2590:
case 3378:
case 1765:
case 2779:
case 2630:
case 1856:
case 2343:
case 3992:
case 1174:
case 4012:
case 2624:
case 3781:
case 1062:
case 81:
case 1205:
case 253:
case 2791:
case 3826:
case 2835:
case 1297:
case 1482:
case 2945:
case 1445:
case 1638:
case 3311:
case 4001:
case 288:
case 3768:
case 2585:
case 3940:
case 2921:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753279201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,];
var gg_b = "1753279201/";

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
