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
var o = 1;
switch (g) {
case 1830:
case 613:
case 121:
case 3800:
case 752:
case 1630:
case 1883:
case 2200:
case 3600:
case 1097:
case 2726:
case 2576:
case 1956:
case 2416:
case 2988:
case 3376:
case 2161:
case 997:
case 1104:
case 2905:
case 1716:
case 2938:
case 866:
case 3043:
case 3182:
case 2251:
case 382:
case 3651:
case 3141:
case 1880:
case 2203:
case 222:
case 824:
case 249:
case 362:
case 3851:
case 1680:
case 796:
case 2063:
case 3803:
case 1537:
case 827:
case 3507:
case 932:
case 2366:
case 85:
case 2435:
case 1785:
case 3073:
case 3791:
case 449:
case 4063:
case 3346:
case 422:
case 1621:
case 4060:
case 1821:
case 165:
case 114:
case 3070:
case 3456:
case 3566:
case 2485:
case 1708:
case 539:
case 1735:
case 3738:
case 774:
case 768:
case 3694:
case 1773:
case 1091:
case 2424:
case 2470:
case 788:
case 238:
case 2106:
case 898:
case 1722:
case 3085:
case 1572:
case 3892:
case 3657:
case 893:
case 689:
case 3159:
case 3649:
case 3692:
case 1005:
case 1038:
case 3857:
case 3009:
case 2473:
case 2248:
case 3310:
case 2167:
case 3648:
case 3158:
case 2954:
case 1155:
case 2869:
case 1039:
case 2513:
case 783:
case 233:
case 1770:
case 358:
case 1520:
case 3797:
case 1875:
case 1362:
case 3878:
case 1740:
case 2278:
case 548:
case 923:
case 3501:
case 3553:
case 1531:
case 433:
case 309:
case 3177:
case 3914:
case 3754:
case 2353:
case 1542:
case 438:
case 3550:
case 1364:
case 4056:
case 1627:
case 543:
case 3016:
case 1129:
case 1598:
case 1743:
case 928:
case 2175:
case 1453:
case 398:
case 1920:
case 1619:
case 701:
case 2464:
case 853:
case 1618:
case 1:
case 1340:
case 4037:
case 3397:
case 1762:
case 3352:
case 1818:
case 3444:
case 905:
case 2462:
case 2552:
case 1343:
case 3228:
case 1495:
case 644:
case 1923:
case 3499:
case 3354:
case 3229:
case 1764:
case 393:
case 2127:
case 478:
case 190:
case 651:
case 3636:
case 1998:
case 1981:
case 1942:
case 1373:
case 2693:
case 1046:
case 340:
case 278:
case 2314:
case 2893:
case 143:
case 3953:
case 1931:
case 3474:
case 1324:
case 3165:
case 1370:
case 148:
case 2690:
case 3420:
case 2855:
case 2037:
case 1867:
case 2145:
case 3255:
case 1258:
case 3389:
case 2539:
case 745:
case 1271:
case 3746:
case 2020:
case 756:
case 941:
case 1407:
case 2538:
case 4044:
case 3388:
case 972:
case 2505:
case 3487:
case 2976:
case 54:
case 264:
case 734:
case 2072:
case 2121:
case 2589:
case 226:
case 487:
case 2591:
case 3339:
case 366:
case 1010:
case 4042:
case 1309:
case 517:
case 386:
case 415:
case 464:
case 936:
case 2802:
case 585:
case 3062:
case 2130:
case 484:
case 3202:
case 2098:
case 3966:
case 2183:
case 4072:
case 1284:
case 737:
case 4023:
case 35:
case 139:
case 327:
case 267:
case 78:
case 1861:
case 1234:
case 23:
case 2604:
case 954:
case 3204:
case 1661:
case 76:
case 3196:
case 4020:
case 3526:
case 3776:
case 1937:
case 89:
case 1316:
case 3630:
case 731:
case 1600:
case 3830:
case 524:
case 1132:
case 610:
case 261:
case 1800:
case 34:
case 935:
case 2985:
case 1184:
case 317:
case 3956:
case 4012:
case 2908:
case 2896:
case 1043:
case 3296:
case 1376:
case 3833:
case 162:
case 499:
case 1851:
case 3633:
case 2909:
case 1182:
case 2233:
case 182:
case 3880:
case 3054:
case 944:
case 947:
case 1788:
case 3785:
case 3537:
case 2387:
case 1926:
case 839:
case 951:
case 91:
case 1211:
case 746:
case 2014:
case 2439:
case 1073:
case 365:
case 314:
case 481:
case 2491:
case 1024:
case 3709:
case 19:
case 2221:
case 461:
case 1739:
case 1566:
case 527:
case 2916:
case 1705:
case 1738:
case 55:
case 2337:
case 1456:
case 2012:
case 3587:
case 2136:
case 350:
case 153:
case 3089:
case 3773:
case 1694:
case 40:
case 672:
case 657:
case 3193:
case 593:
case 3088:
case 3722:
case 3572:
case 641:
case 62:
case 3412:
case 1692:
case 1159:
case 3038:
case 1857:
case 598:
case 2865:
case 1892:
case 890:
case 3190:
case 1268:
case 2665:
case 230:
case 3845:
case 3770:
case 780:
case 3520:
case 3724:
case 3574:
case 1310:
case 1648:
case 3155:
case 3645:
case 2323:
case 3039:
case 920:
case 1217:
case 1678:
case 1752:
case 2922:
case 1797:
case 3875:
case 906:
case 2564:
case 109:
case 1914:
case 1501:
case 2760:
case 1553:
case 2381:
case 2454:
case 707:
case 2973:
case 2399:
case 3531:
case 2970:
case 2924:
case 654:
case 20:
case 3581:
case 1460:
case 3542:
case 2331:
case 3599:
case 2344:
case 2452:
case 3129:
case 3743:
case 1912:
case 2562:
case 2497:
case 470:
case 198:
case 3920:
case 2781:
case 913:
case 3819:
case 1431:
case 2360:
case 2798:
case 1444:
case 2543:
case 2179:
case 3277:
case 3618:
case 3:
case 2677:
case 1397:
case 850:
case 3343:
case 3972:
case 2744:
case 3495:
case 2625:
case 2825:
case 3764:
case 193:
case 3450:
case 1499:
case 1481:
case 3560:
case 3806:
case 902:
case 1836:
case 3606:
case 1512:
case 2962:
case 3046:
case 2570:
case 3981:
case 2410:
case 3373:
case 694:
case 2524:
case 2774:
case 1293:
case 1165:
case 3168:
case 2157:
case 2647:
case 2413:
case 3370:
case 1514:
case 348:
case 270:
case 1953:
case 2573:
case 2847:
case 2723:
case 1901:
case 1710:
case 3324:
case 2149:
case 509:
case 2522:
case 1886:
case 2658:
case 2148:
case 1255:
case 3258:
case 2007:
case 3169:
case 1686:
case 1746:
case 3013:
case 817:
case 2871:
case 459:
case 1389:
case 4001:
case 1391:
case 2509:
case 2671:
case 2535:
case 84:
case 821:
case 562:
case 879:
case 2356:
case 412:
case 1437:
case 3407:
case 2787:
case 3335:
case 3466:
case 2585:
case 1305:
case 4095:
case 1487:
case 989:
case 2737:
case 203:
case 2446:
case 3309:
case 1202:
case 2095:
case 623:
case 111:
case 2632:
case 59:
case 1062:
case 2050:
case 339:
case 771:
case 403:
case 2684:
case 742:
case 729:
case 259:
case 2261:
case 1196:
case 3861:
case 1204:
case 628:
case 3316:
case 3241:
case 1526:
case 1907:
case 2841:
case 212:
case 814:
case 2882:
case 2785:
case 1408:
case 1435:
case 3438:
case 2537:
case 399:
case 1409:
case 1811:
case 1546:
case 479:
case 325:
case 214:
case 735:
case 2709:
case 2621:
case 285:
case 421:
case 2735:
case 316:
case 2708:
case 3916:
case 4052:
case 3488:
case 1307:
case 601:
case 931:
case 587:
case 2587:
case 465:
case 3230:
case 2883:
case 221:
case 24:
case 1989:
case 361:
case 1060:
case 515:
case 564:
case 3283:
case 1988:
case 3985:
case 2052:
case 500:
case 1726:
case 526:
case 217:
case 2097:
case 3935:
case 2716:
case 1905:
case 1161:
case 803:
case 2296:
case 149:
case 122:
case 1203:
case 2880:
case 2054:
case 2633:
case 3909:
case 1251:
case 17:
case 3922:
case 573:
case 2675:
case 4038:
case 3275:
case 2544:
case 1278:
case 1617:
case 1443:
case 2740:
case 1119:
case 1817:
case 980:
case 3115:
case 3564:
case 1350:
case 3399:
case 2531:
case 3342:
case 3381:
case 3760:
case 4039:
case 2364:
case 3331:
case 2542:
case 2599:
case 4089:
case 4091:
case 3924:
case 2128:
case 30:
case 578:
case 2598:
case 2129:
case 3452:
case 3344:
case 3497:
case 1440:
case 1714:
case 138:
case 1470:
case 3136:
case 1424:
case 1294:
case 2960:
case 3374:
case 1510:
case 2088:
case 2722:
case 2572:
case 2193:
case 68:
case 1056:
case 3940:
case 1997:
case 1868:
case 3372:
case 3943:
case 1292:
case 2005:
case 637:
case 907:
case 1668:
case 3665:
case 1257:
case 2265:
case 2190:
case 1712:
case 2770:
case 133:
case 1669:
case 330:
case 2963:
case 3186:
case 1513:
case 2414:
case 720:
case 2155:
case 2724:
case 1248:
case 1473:
case 2574:
case 1167:
case 3245:
case 3066:
case 2998:
case 3194:
case 3962:
case 1087:
case 1236:
case 3206:
case 696:
case 2606:
case 1314:
case 3570:
case 3720:
case 2046:
case 2373:
case 2981:
case 248:
case 3413:
case 3647:
case 2247:
case 3964:
case 2168:
case 3659:
case 1890:
case 2324:
case 2259:
case 3573:
case 3847:
case 2931:
case 619:
case 2258:
case 3267:
case 2944:
case 1145:
case 652:
case 677:
case 2867:
case 1312:
case 1855:
case 4:
case 1037:
case 3007:
case 2563:
case 1913:
case 448:
case 2619:
case 1750:
case 3219:
case 3360:
case 2974:
case 3799:
case 2401:
case 3877:
case 1795:
case 1215:
case 3218:
case 2495:
case 3625:
case 3744:
case 1552:
case 1462:
case 2076:
case 3363:
case 2764:
case 2560:
case 1629:
case 1910:
case 702:
case 1753:
case 2232:
case 3516:
case 1183:
case 1602:
case 1130:
case 3476:
case 3832:
case 1802:
case 3100:
case 1326:
case 789:
case 239:
case 187:
case 769:
case 4010:
case 2284:
case 4013:
case 3834:
case 2661:
case 1604:
case 3001:
case 13:
case 2861:
case 3053:
case 2234:
case 2316:
case 1044:
case 2282:
case 3641:
case 3151:
case 3103:
case 3882:
case 2937:
case 312:
case 2013:
case 308:
case 1020:
case 3509:
case 3671:
case 1539:
case 3508:
case 995:
case 1505:
case 1766:
case 522:
case 3535:
case 861:
case 1538:
case 881:
case 184:
case 1121:
case 2308:
case 3585:
case 1072:
case 2335:
case 929:
case 164:
case 3737:
case 1976:
case 100:
case 3446:
case 303:
case 2309:
case 775:
case 1756:
case 996:
case 2022:
case 2788:
case 559:
case 3435:
case 2171:
case 887:
case 3409:
case 2073:
case 482:
case 2789:
case 462:
case 919:
case 1221:
case 1489:
case 2024:
case 29:
case 2070:
case 125:
case 776:
case 4040:
case 2705:
case 1916:
case 2566:
case 1488:
case 4024:
case 3991:
case 49:
case 1283:
case 4070:
case 3988:
case 2184:
case 3161:
case 2376:
case 794:
case 2043:
case 508:
case 1935:
case 826:
case 3938:
case 4022:
case 1233:
case 2651:
case 4073:
case 1909:
case 37:
case 262:
case 815:
case 2851:
case 3063:
case 322:
case 878:
case 2797:
case 3395:
case 2752:
case 2217:
case 3278:
case 3617:
case 1342:
case 1399:
case 1381:
case 3279:
case 1760:
case 2501:
case 2914:
case 1564:
case 2463:
case 3350:
case 2879:
case 1331:
case 2460:
case 3353:
case 2754:
case 1924:
case 2125:
case 453:
case 1497:
case 1562:
case 3440:
case 968:
case 1452:
case 2016:
case 1344:
case 4085:
case 2694:
case 3424:
case 3294:
case 1374:
case 728:
case 338:
case 3106:
case 253:
case 1136:
case 3470:
case 3056:
case 2085:
case 4016:
case 3952:
case 695:
case 3257:
case 2657:
case 2849:
case 3712:
case 642:
case 1865:
case 2857:
case 2008:
case 3292:
case 2649:
case 2692:
case 1323:
case 2009:
case 3248:
case 1245:
case 130:
case 1962:
case 50:
case 2512:
case 3236:
case 1206:
case 2836:
case 2995:
case 2293:
case 1524:
case 1410:
case 2713:
case 3893:
case 378:
case 3314:
case 1570:
case 1720:
case 240:
case 1192:
case 1659:
case 1149:
case 2710:
case 2901:
case 3890:
case 1847:
case 1573:
case 170:
case 1859:
case 1647:
case 2165:
case 1964:
case 373:
case 2686:
case 3312:
case 3037:
case 1858:
case 1267:
case 3655:
case 3145:
case 1148:
case 1658:
case 1522:
case 710:
case 1360:
case 1178:
case 2431:
case 1742:
case 1799:
case 1781:
case 298:
case 3750:
case 3215:
case 838:
case 1677:
case 1218:
case 2615:
case 1179:
case 2444:
case 1877:
case 1543:
case 2815:
case 1798:
case 1825:
case 3597:
case 1540:
case 3462:
case 833:
case 2498:
case 655:
case 2228:
case 1744:
case 3552:
case 2229:
case 2442:
case 3910:
case 293:
case 1832:
case 1100:
case 3326:
case 1516:
case 3183:
case 992:
case 387:
case 934:
case 466:
case 3042:
case 3081:
case 227:
case 3946:
case 1884:
case 2204:
case 1001:
case 3604:
case 757:
case 1634:
case 3031:
case 1053:
case 3804:
case 2196:
case 72:
case 159:
case 2064:
case 1841:
case 112:
case 2907:
case 956:
case 1682:
case 1641:
case 1151:
case 3044:
case 945:
case 1671:
case 3074:
case 2391:
case 2389:
case 1871:
case 2746:
case 96:
case 1508:
case 98:
case 754:
case 1535:
case 3538:
case 849:
case 315:
case 2487:
case 4062:
case 2305:
case 1585:
case 2338:
case 266:
case 2339:
case 45:
case 326:
case 1446:
case 736:
case 103:
case 2345:
case 3759:
case 1594:
case 3623:
case 220:
case 3823:
case 1406:
case 3365:
case 1368:
case 501:
case 1170:
case 3436:
case 2767:
case 1124:
case 2925:
case 3758:
case 3672:
case 90:
case 3486:
case 2565:
case 2706:
case 1915:
case 1467:
case 2274:
case 3674:
case 188:
case 3820:
case 750:
case 1213:
case 3874:
case 168:
case 3620:
case 1418:
case 2327:
case 1082:
case 3967:
case 3575:
case 1578:
case 3154:
case 2958:
case 2959:
case 1579:
case 1034:
case 3631:
case 2864:
case 1143:
case 1653:
case 2231:
case 1801:
case 2947:
case 3264:
case 1853:
case 2664:
case 664:
case 406:
case 3152:
case 2281:
case 1084:
case 3197:
case 307:
case 3899:
case 3881:
case 1650:
case 1140:
case 1936:
case 3262:
case 3527:
case 3906:
case 1895:
case 2375:
case 1032:
case 2428:
case 3698:
case 3583:
case 1116:
case 3029:
case 1704:
case 3734:
case 1500:
case 2761:
case 444:
case 1276:
case 4036:
case 3028:
case 3782:
case 21:
case 1025:
case 2402:
case 678:
case 2596:
case 119:
case 2015:
case 592:
case 3732:
case 1702:
case 673:
case 717:
case 534:
case 1551:
case 3533:
case 779:
case 2404:
case 3784:
case 1461:
case 2330:
case 916:
case 2126:
case 174:
case 895:
case 3637:
case 961:
case 3055:
case 981:
case 3139:
case 2321:
case 1108:
case 1135:
case 2934:
case 714:
case 785:
case 3961:
case 3771:
case 3093:
case 1185:
case 447:
case 355:
case 1246:
case 1311:
case 3687:
case 2036:
case 2287:
case 244:
case 1666:
case 58:
case 41:
case 871:
case 1903:
case 1239:
case 1951:
case 3933:
case 2571:
case 3069:
case 2107:
case 192:
case 3980:
case 3068:
case 1065:
case 2057:
case 2808:
case 134:
case 3235:
case 2635:
case 4078:
case 552:
case 1205:
case 2885:
case 596:
case 3856:
case 959:
case 2685:
case 3285:
case 1421:
case 2094:
case 156:
case 1289:
case 1291:
case 291:
case 2166:
case 145:
case 1900:
case 3930:
case 2816:
case 638:
case 3341:
case 2584:
case 1483:
case 491:
case 3921:
case 4094:
case 16:
case 2361:
case 2780:
case 395:
case 18:
case 3400:
case 1433:
case 2534:
case 371:
case 739:
case 3403:
case 2079:
case 3561:
case 137:
case 2730:
case 4057:
case 4049:
case 633:
case 903:
case 4092:
case 1302:
case 3332:
case 846:
case 790:
case 2003:
case 1948:
case 3945:
case 2051:
case 1254:
case 3663:
case 2263:
case 2727:
case 588:
case 1515:
case 1096:
case 418:
case 2643:
case 568:
case 1475:
case 3325:
case 3377:
case 2318:
case 3240:
case 413:
case 1252:
case 7:
case 970:
case 1994:
case 2260:
case 1162:
case 1768:
case 3927:
case 3765:
case 1536:
case 1612:
case 2367:
case 1812:
case 748:
case 3224:
case 3359:
case 3494:
case 3270:
case 2824:
case 4000:
case 3273:
case 4051:
case 2559:
case 1979:
case 4003:
case 3011:
case 2306:
case 807:
case 2468:
case 2622:
case 3492:
case 3975:
case 2558:
case 2810:
case 3790:
case 1747:
case 1823:
case 3210:
case 1759:
case 2348:
case 383:
case 2928:
case 1758:
case 2392:
case 104:
case 2786:
case 3368:
case 1436:
case 3549:
case 3592:
case 659:
case 2458:
case 3467:
case 801:
case 2736:
case 1486:
case 1918:
case 4061:
case 2447:
case 2613:
case 1874:
case 368:
case 1919:
case 753:
case 1674:
case 3793:
case 388:
case 1820:
case 1575:
case 3082:
case 3728:
case 3578:
case 1154:
case 3041:
case 2517:
case 938:
case 2163:
case 3986:
case 2477:
case 3419:
case 2990:
case 1264:
case 3853:
case 3579:
case 2253:
case 1631:
case 3034:
case 3143:
case 1197:
case 1899:
case 3140:
case 2379:
case 709:
case 2993:
case 1152:
case 1642:
case 3850:
case 3084:
case 2378:
case 3032:
case 3936:
case 1527:
case 1777:
case 2715:
case 1906:
case 3895:
case 232:
case 1530:
case 782:
case 3500:
case 2351:
case 1583:
case 1029:
case 3116:
case 1734:
case 1782:
case 1741:
case 2432:
case 2876:
case 294:
case 4006:
case 1396:
case 3276:
case 1732:
case 2441:
case 2482:
case 3077:
case 2018:
case 3461:
case 1580:
case 2300:
case 2019:
case 476:
case 2434:
case 1784:
case 2067:
case 3109:
case 3058:
case 86:
case 3807:
case 529:
case 1139:
case 4018:
case 88:
case 1637:
case 2207:
case 4019:
case 1090:
case 2511:
case 3135:
case 2471:
case 155:
case 3311:
case 2156:
case 432:
case 146:
case 1521:
case 1093:
case 2846:
case 3185:
case 1188:
case 595:
case 3666:
case 949:
case 2902:
case 494:
case 2137:
case 392:
case 2639:
case 3239:
case 1209:
case 786:
case 2045:
case 1235:
case 896:
case 3238:
case 4075:
case 724:
case 1068:
case 531:
case 334:
case 1856:
case 3288:
case 1285:
case 852:
case 254:
case 2891:
case 3711:
case 819:
case 3900:
case 345:
case 472:
case 2889:
case 457:
case 1930:
case 2187:
case 2691:
case 42:
case 1371:
case 1382:
case 555:
case 454:
case 3430:
case 272:
case 257:
case 1400:
case 195:
case 1334:
case 2703:
case 3483:
case 2751:
case 129:
case 2700:
case 1561:
case 142:
case 75:
case 3480:
case 3433:
case 727:
case 171:
case 436:
case 3826:
case 2075:
case 1332:
case 630:
case 2226:
case 926:
case 711:
case 2969:
case 2080:
case 3948:
case 1863:
case 2144:
case 2654:
case 2033:
case 3254:
case 3329:
case 699:
case 1478:
case 1243:
case 978:
case 3328:
case 3164:
case 3515:
case 863:
case 3957:
case 3096:
case 973:
case 2652:
case 2528:
case 2778:
case 560:
case 2897:
case 1377:
case 1240:
case 3427:
case 1860:
case 2083:
case 2529:
case 2779:
case 681:
case 2123:
case 1110:
case 2792:
case 3355:
case 3812:
case 1927:
case 661:
case 1506:
case 3536:
case 210:
case 3769:
case 3390:
case 205:
case 2593:
case 4080:
case 3814:
case 740:
case 1492:
case 1222:
case 1567:
case 2174:
case 2555:
case 2917:
case 1113:
case 3586:
case 953:
case 3955:
case 1958:
case 2728:
case 2578:
case 1327:
case 2986:
case 2418:
case 3061:
case 2853:
case 1947:
case 468:
case 2419:
case 810:
case 2143:
case 1864:
case 518:
case 1231:
case 2034:
case 4071:
case 488:
case 2579:
case 3201:
case 1959:
case 2140:
case 3250:
case 1242:
case 2084:
case 3379:
case 3993:
case 483:
case 2695:
case 3425:
case 3295:
case 2317:
case 2032:
case 3378:
case 1718:
case 2936:
case 263:
case 120:
case 1112:
case 106:
case 1493:
case 3610:
case 733:
case 2210:
case 4084:
case 3348:
case 1272:
case 639:
case 909:
case 2755:
case 3349:
case 3928:
case 3357:
case 2170:
case 2368:
case 3786:
case 1455:
case 3458:
case 2549:
case 1114:
case 1706:
case 3568:
case 1565:
case 3736:
case 328:
case 1490:
case 2213:
case 3394:
case 3813:
case 2793:
case 4034:
case 2548:
case 2807:
case 2058:
case 1982:
case 3067:
case 2109:
case 841:
case 2607:
case 1086:
case 4077:
case 872:
case 274:
case 1237:
case 857:
case 452:
case 477:
case 2047:
case 3511:
case 135:
case 6:
case 376:
case 3471:
case 2135:
case 3904:
case 1321:
case 2059:
case 3646:
case 2311:
case 2246:
case 2185:
case 3902:
case 2666:
case 962:
case 3266:
case 144:
case 1287:
case 982:
case 77:
case 1761:
case 147:
case 1380:
case 332:
case 151:
case 722:
case 3303:
case 749:
case 2704:
case 3432:
case 1402:
case 11:
case 3441:
case 4058:
case 575:
case 1015:
case 3018:
case 2077:
case 219:
case 99:
case 3300:
case 4047:
case 1330:
case 252:
case 854:
case 277:
case 1404:
case 2503:
case 2551:
case 876:
case 1816:
case 3027:
case 445:
case 1780:
case 1361:
case 2430:
case 1733:
case 456:
case 2304:
case 26:
case 3751:
case 32:
case 341:
case 2483:
case 544:
case 1730:
case 492:
case 787:
case 3911:
case 3504:
case 1783:
case 1534:
case 1541:
case 535:
case 3075:
case 1078:
case 2302:
case 966:
case 1809:
case 1411:
case 3137:
case 292:
case 1107:
case 3045:
case 336:
case 927:
case 1635:
case 2238:
case 715:
case 95:
case 1808:
case 234:
case 3805:
case 832:
case 1057:
case 784:
case 1685:
case 551:
case 1885:
case 3889:
case 3891:
case 48:
case 2711:
case 1166:
case 2291:
case 1094:
case 2421:
case 46:
case 2355:
case 1367:
case 998:
case 679:
case 2612:
case 310:
case 621:
case 64:
case 2768:
case 2390:
case 1670:
case 3021:
case 3748:
case 401:
case 3172:
case 3590:
case 1469:
case 3214:
case 1547:
case 2614:
case 2445:
case 3794:
case 2814:
case 3555:
case 3174:
case 2978:
case 1622:
case 1468:
case 3465:
case 118:
case 1306:
case 1822:
case 102:
case 3854:
case 3080:
case 3969:
case 3033:
case 3144:
case 3654:
case 2992:
case 1101:
case 2328:
case 3131:
case 1643:
case 2096:
case 2957:
case 1727:
case 3968:
case 3897:
case 520:
case 2717:
case 1775:
case 1525:
case 614:
case 665:
case 3778:
case 3142:
case 3181:
case 1840:
case 3697:
case 2297:
case 685:
case 828:
case 3315:
case 2162:
case 1319:
case 1000:
case 3083:
case 201:
case 1195:
case 2994:
case 2844:
case 1477:
case 2154:
case 2644:
case 950:
case 3958:
case 2575:
case 3244:
case 2725:
case 3864:
case 2631:
case 1201:
case 3959:
case 1061:
case 3664:
case 2264:
case 3947:
case 1990:
case 480:
case 3242:
case 2681:
case 2642:
case 2699:
case 1993:
case 818:
case 2842:
case 207:
case 2898:
case 2906:
case 404:
case 1715:
case 666:
case 3718:
case 2777:
case 686:
case 2698:
case 3298:
case 1378:
case 3862:
case 3223:
case 3493:
case 1610:
case 2759:
case 611:
case 123:
case 1810:
case 3112:
case 1357:
case 2365:
case 1786:
case 3272:
case 1349:
case 3767:
case 3925:
case 627:
case 1568:
case 3565:
case 1459:
case 2820:
case 2674:
case 1569:
case 2919:
case 2620:
case 1613:
case 2874:
case 94:
case 1207:
case 716:
case 2637:
case 3237:
case 979:
case 3941:
case 3982:
case 2138:
case 725:
case 176:
case 3934:
case 1471:
case 1904:
case 3321:
case 4029:
case 2771:
case 2093:
case 1646:
case 1156:
case 1006:
case 344:
case 2687:
case 541:
case 52:
case 3036:
case 4028:
case 2191:
case 693:
case 1266:
case 351:
case 1303:
case 446:
case 2734:
case 2029:
case 2583:
case 347:
case 455:
case 3380:
case 1676:
case 194:
case 1876:
case 1432:
case 2028:
case 3015:
case 985:
case 1482:
case 891:
case 4055:
case 914:
case 965:
case 231:
case 3404:
case 781:
case 2533:
case 3971:
case 4090:
case 1019:
case 3126:
case 761:
case 3330:
case 835:
case 3532:
case 597:
case 2382:
case 712:
case 1502:
case 759:
case 141:
case 3584:
case 1703:
case 2400:
case 172:
case 3780:
case 2176:
case 1504:
case 2384:
case 2451:
case 3534:
case 3730:
case 369:
case 844:
case 1700:
case 576:
case 3541:
case 3582:
case 3078:
case 703:
case 2933:
case 3571:
case 3048:
case 81:
case 471:
case 136:
case 1639:
case 375:
case 3411:
case 1137:
case 3107:
case 1839:
case 3808:
case 1838:
case 2068:
case 3092:
case 1605:
case 1638:
case 851:
case 609:
case 4017:
case 154:
case 1888:
case 3885:
case 2656:
case 2146:
case 2285:
case 1688:
case 2856:
case 3685:
case 2983:
case 708:
case 391:
case 3094:
case 1691:
case 1187:
case 495:
case 1386:
case 1212:
case 1757:
case 313:
case 2765:
case 2110:
case 3624:
case 1593:
case 1748:
case 2224:
case 2359:
case 3745:
case 1172:
case 9:
case 770:
case 105:
case 2270:
case 2273:
case 2448:
case 1794:
case 1590:
case 3469:
case 1214:
case 3547:
case 3468:
case 1465:
case 318:
case 3822:
case 662:
case 3558:
case 990:
case 2567:
case 2222:
case 3622:
case 2492:
case 1033:
case 1144:
case 3051:
case 3003:
case 3263:
case 4011:
case 302:
case 2663:
case 1969:
case 2519:
case 2518:
case 1968:
case 3843:
case 943:
case 2325:
case 2243:
case 806:
case 3153:
case 3643:
case 3417:
case 1697:
case 1852:
case 2240:
case 3640:
case 3775:
case 1528:
case 948:
case 1778:
case 1142:
case 1652:
case 523:
case 1181:
case 3260:
case 1083:
case 3195:
case 3000:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743580801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,];
var gg_b = "1743580801/";

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
