// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
case 2816:
case 839:
case 1033:
case 2899:
case 3464:
case 1433:
case 3132:
case 956:
case 3821:
case 2194:
case 2476:
case 1219:
case 3480:
case 3283:
case 1854:
case 3621:
case 1571:
case 3377:
case 2761:
case 888:
case 1450:
case 2631:
case 1776:
case 2995:
case 3390:
case 1891:
case 2502:
case 1064:
case 595:
case 3908:
case 2577:
case 2016:
case 1467:
case 1077:
case 3655:
case 2718:
case 4013:
case 2781:
case 1615:
case 1897:
case 1921:
case 1181:
case 2149:
case 1189:
case 1783:
case 2039:
case 2543:
case 1536:
case 2670:
case 3260:
case 1798:
case 565:
case 905:
case 826:
case 977:
case 2691:
case 2234:
case 1812:
case 724:
case 559:
case 2382:
case 488:
case 3408:
case 2567:
case 292:
case 2700:
case 2705:
case 3075:
case 3842:
case 670:
case 757:
case 421:
case 459:
case 3568:
case 3946:
case 3958:
case 3244:
case 1382:
case 2756:
case 3012:
case 31:
case 3977:
case 3462:
case 3775:
case 2922:
case 3225:
case 918:
case 3853:
case 3171:
case 3327:
case 3:
case 2800:
case 2087:
case 1127:
case 1215:
case 1962:
case 930:
case 3033:
case 1184:
case 3319:
case 2852:
case 1180:
case 1570:
case 3506:
case 2574:
case 2255:
case 2909:
case 1149:
case 2960:
case 780:
case 2475:
case 1780:
case 899:
case 3394:
case 2252:
case 1334:
case 2993:
case 1577:
case 2974:
case 1569:
case 3401:
case 2216:
case 3885:
case 1943:
case 3285:
case 3758:
case 1055:
case 2195:
case 1559:
case 484:
case 2144:
case 2021:
case 3404:
case 2775:
case 3248:
case 1887:
case 2075:
case 854:
case 3576:
case 3397:
case 2807:
case 1973:
case 3755:
case 3953:
case 2361:
case 2064:
case 981:
case 2547:
case 741:
case 2876:
case 926:
case 3989:
case 2007:
case 624:
case 3054:
case 3746:
case 1464:
case 414:
case 118:
case 3417:
case 3052:
case 2811:
case 1841:
case 3627:
case 2108:
case 18:
case 178:
case 2659:
case 1665:
case 1736:
case 2708:
case 669:
case 2621:
case 2427:
case 1932:
case 1000:
case 2076:
case 119:
case 318:
case 3191:
case 2508:
case 1981:
case 3869:
case 2533:
case 723:
case 1435:
case 1263:
case 399:
case 2823:
case 2626:
case 707:
case 1514:
case 1856:
case 1050:
case 2172:
case 9:
case 1307:
case 659:
case 1378:
case 2578:
case 1254:
case 1043:
case 1287:
case 1787:
case 1002:
case 2877:
case 504:
case 2740:
case 3503:
case 2826:
case 3719:
case 446:
case 2863:
case 711:
case 2467:
case 3539:
case 871:
case 566:
case 1233:
case 473:
case 3637:
case 474:
case 439:
case 1413:
case 3489:
case 2759:
case 3353:
case 3661:
case 953:
case 2238:
case 495:
case 2350:
case 1496:
case 3452:
case 3945:
case 2777:
case 2835:
case 3897:
case 15:
case 1316:
case 3053:
case 2471:
case 3995:
case 2217:
case 3038:
case 3139:
case 3910:
case 1394:
case 611:
case 2495:
case 2448:
case 1565:
case 2199:
case 2262:
case 2070:
case 2942:
case 1505:
case 3877:
case 586:
case 1733:
case 3376:
case 3664:
case 3948:
case 1752:
case 745:
case 3537:
case 381:
case 3701:
case 3649:
case 2737:
case 885:
case 3449:
case 1786:
case 3912:
case 1511:
case 1770:
case 1091:
case 3761:
case 3609:
case 2005:
case 2283:
case 2247:
case 2428:
case 278:
case 1778:
case 148:
case 2139:
case 3538:
case 2563:
case 3809:
case 1538:
case 5:
case 3849:
case 1930:
case 3059:
case 1163:
case 1848:
case 4086:
case 2825:
case 1823:
case 895:
case 110:
case 338:
case 3922:
case 868:
case 3098:
case 1931:
case 2934:
case 1828:
case 2843:
case 3697:
case 3763:
case 1360:
case 379:
case 997:
case 3952:
case 3468:
case 2271:
case 2808:
case 3903:
case 606:
case 993:
case 3070:
case 3507:
case 743:
case 2311:
case 1244:
case 1699:
case 3982:
case 2182:
case 2269:
case 2977:
case 3099:
case 51:
case 648:
case 2472:
case 570:
case 1008:
case 667:
case 3089:
case 1873:
case 3106:
case 1088:
case 3530:
case 676:
case 705:
case 1314:
case 2032:
case 3955:
case 2394:
case 686:
case 2730:
case 1214:
case 1198:
case 3226:
case 2356:
case 1193:
case 1412:
case 947:
case 3428:
case 1144:
case 3881:
case 845:
case 3157:
case 2422:
case 2230:
case 2341:
case 6:
case 1356:
case 1575:
case 2925:
case 683:
case 626:
case 1852:
case 536:
case 740:
case 2914:
case 1453:
case 622:
case 821:
case 2873:
case 596:
case 1933:
case 35:
case 1732:
case 1212:
case 4031:
case 1430:
case 661:
case 3472:
case 3128:
case 501:
case 1419:
case 1009:
case 2071:
case 3309:
case 2702:
case 440:
case 1332:
case 1139:
case 2068:
case 2949:
case 2990:
case 678:
case 3800:
case 4080:
case 2760:
case 1137:
case 1097:
case 2538:
case 3491:
case 1718:
case 1333:
case 1367:
case 3268:
case 3202:
case 1365:
case 1904:
case 1448:
case 3510:
case 252:
case 1463:
case 1242:
case 0:
case 1944:
case 2263:
case 1209:
case 1608:
case 3927:
case 2981:
case 2770:
case 331:
case 1154:
case 1246:
case 2120:
case 3608:
case 3935:
case 416:
case 2589:
case 1631:
case 1462:
case 1331:
case 4044:
case 1805:
case 2124:
case 3440:
case 2479:
case 3398:
case 2975:
case 2625:
case 2403:
case 2357:
case 3487:
case 1937:
case 2441:
case 3607:
case 315:
case 2844:
case 835:
case 1306:
case 3192:
case 1884:
case 3909:
case 3973:
case 3725:
case 1404:
case 1549:
case 54:
case 1265:
case 1059:
case 3796:
case 876:
case 2596:
case 2954:
case 467:
case 613:
case 1763:
case 2750:
case 3335:
case 3418:
case 489:
case 2430:
case 3121:
case 3423:
case 2113:
case 3629:
case 116:
case 3497:
case 2677:
case 4092:
case 910:
case 2645:
case 1203:
case 1633:
case 2483:
case 3694:
case 1548:
case 135:
case 716:
case 2548:
case 3808:
case 103:
case 573:
case 508:
case 522:
case 337:
case 260:
case 2332:
case 3604:
case 415:
case 2896:
case 2651:
case 1639:
case 3382:
case 335:
case 1197:
case 4068:
case 3439:
case 2334:
case 129:
case 2165:
case 174:
case 3889:
case 2235:
case 1977:
case 1296:
case 3064:
case 2137:
case 791:
case 1148:
case 491:
case 1698:
case 1066:
case 537:
case 3224:
case 1441:
case 1086:
case 122:
case 330:
case 3575:
case 3548:
case 1983:
case 1122:
case 3183:
case 2009:
case 2185:
case 1821:
case 806:
case 1268:
case 1641:
case 3074:
case 2665:
case 143:
case 971:
case 3133:
case 1793:
case 3354:
case 3803:
case 766:
case 3289:
case 1485:
case 820:
case 3076:
case 511:
case 251:
case 2636:
case 561:
case 1912:
case 114:
case 637:
case 2:
case 1847:
case 2444:
case 2550:
case 980:
case 2059:
case 2520:
case 2809:
case 1553:
case 1529:
case 2666:
case 2284:
case 1124:
case 1177:
case 3577:
case 4026:
case 3228:
case 3752:
case 859:
case 88:
case 2575:
case 1136:
case 3516:
case 1640:
case 3005:
case 1807:
case 3597:
case 2388:
case 3326:
case 3983:
case 176:
case 3959:
case 3349:
case 57:
case 1928:
case 2036:
case 1516:
case 4070:
case 1579:
case 1853:
case 3405:
case 67:
case 2349:
case 2061:
case 3915:
case 500:
case 3840:
case 1397:
case 3025:
case 1619:
case 1919:
case 3750:
case 95:
case 1629:
case 2772:
case 3724:
case 1386:
case 3145:
case 4003:
case 3182:
case 1482:
case 3256:
case 1400:
case 2355:
case 1119:
case 3525:
case 2803:
case 106:
case 3824:
case 2646:
case 2500:
case 373:
case 1145:
case 1104:
case 215:
case 8:
case 220:
case 1961:
case 1072:
case 2387:
case 2820:
case 869:
case 2947:
case 3641:
case 3791:
case 2086:
case 1447:
case 1275:
case 3943:
case 3210:
case 1948:
case 2650:
case 455:
case 2365:
case 940:
case 2105:
case 2686:
case 1960:
case 1762:
case 125:
case 2306:
case 3116:
case 403:
case 2461:
case 2867:
case 3797:
case 3227:
case 2723:
case 1446:
case 732:
case 1347:
case 1925:
case 171:
case 1120:
case 3933:
case 1408:
case 430:
case 1810:
case 1850:
case 2675:
case 431:
case 3554:
case 1520:
case 2929:
case 271:
case 3925:
case 1058:
case 3403:
case 2110:
case 433:
case 273:
case 709:
case 3358:
case 556:
case 2407:
case 2649:
case 348:
case 283:
case 3217:
case 627:
case 2250:
case 3644:
case 1865:
case 3330:
case 196:
case 614:
case 284:
case 2102:
case 3243:
case 307:
case 3286:
case 1014:
case 1089:
case 3635:
case 925:
case 128:
case 1228:
case 1624:
case 2049:
case 746:
case 4069:
case 165:
case 1221:
case 230:
case 1121:
case 146:
case 629:
case 735:
case 1278:
case 518:
case 2606:
case 3731:
case 3966:
case 2029:
case 1714:
case 1611:
case 1757:
case 958:
case 1452:
case 542:
case 3545:
case 105:
case 3722:
case 4094:
case 3596:
case 448:
case 3658:
case 1992:
case 324:
case 1216:
case 1439:
case 952:
case 194:
case 2836:
case 3546:
case 2167:
case 643:
case 2091:
case 785:
case 3892:
case 2200:
case 632:
case 3857:
case 161:
case 945:
case 1766:
case 3194:
case 1337:
case 1422:
case 1756:
case 2067:
case 3508:
case 3239:
case 1423:
case 1273:
case 3152:
case 1042:
case 1774:
case 2605:
case 1425:
case 3055:
case 1113:
case 2404:
case 1711:
case 2531:
case 1283:
case 1417:
case 1049:
case 3222:
case 1402:
case 1508:
case 762:
case 1109:
case 2907:
case 3481:
case 2640:
case 1892:
case 2159:
case 3047:
case 302:
case 149:
case 3088:
case 1461:
case 991:
case 1824:
case 3254:
case 2902:
case 3314:
case 2579:
case 1195:
case 4021:
case 1375:
case 400:
case 1301:
case 1704:
case 175:
case 608:
case 1544:
case 158:
case 265:
case 2738:
case 3929:
case 862:
case 2819:
case 2027:
case 1084:
case 42:
case 2837:
case 900:
case 1596:
case 3862:
case 4018:
case 2682:
case 3515:
case 1026:
case 1289:
case 2868:
case 1500:
case 1694:
case 3833:
case 1512:
case 1146:
case 647:
case 1750:
case 1415:
case 2001:
case 4007:
case 3029:
case 235:
case 3410:
case 3675:
case 1951:
case 1138:
case 2432:
case 26:
case 447:
case 3379:
case 715:
case 3478:
case 1724:
case 1087:
case 3887:
case 2796:
case 312:
case 41:
case 1934:
case 3282:
case 2322:
case 2822:
case 3618:
case 3773:
case 2787:
case 2014:
case 3499:
case 1775:
case 3691:
case 3434:
case 2095:
case 618:
case 1389:
case 21:
case 3083:
case 1627:
case 4001:
case 4014:
case 961:
case 1534:
case 2320:
case 218:
case 1276:
case 779:
case 3328:
case 3374:
case 3172:
case 2910:
case 1998:
case 2236:
case 2905:
case 3960:
case 965:
case 1432:
case 917:
case 1455:
case 2696:
case 3994:
case 822:
case 1366:
case 2381:
case 244:
case 1027:
case 356:
case 2183:
case 1288:
case 363:
case 1160:
case 3103:
case 4041:
case 2701:
case 1324:
case 843:
case 3364:
case 1539:
case 75:
case 3223:
case 2329:
case 3365:
case 170:
case 2599:
case 3590:
case 2720:
case 254:
case 3159:
case 185:
case 3332:
case 1427:
case 1972:
case 2893:
case 1359:
case 104:
case 681:
case 2985:
case 1521:
case 4037:
case 1703:
case 1551:
case 1781:
case 2556:
case 3275:
case 2620:
case 1305:
case 3023:
case 2632:
case 1234:
case 285:
case 3027:
case 2817:
case 2758:
case 3586:
case 2991:
case 2219:
case 879:
case 695:
case 3673:
case 181:
case 2367:
case 3647:
case 2813:
case 2684:
case 3679:
case 3104:
case 515:
case 778:
case 2639:
case 1140:
case 3135:
case 1588:
case 1809:
case 2468:
case 3336:
case 4034:
case 1429:
case 1623:
case 998:
case 2655:
case 3764:
case 1076:
case 1039:
case 1533:
case 3026:
case 2416:
case 3565:
case 3665:
case 934:
case 1282:
case 2504:
case 1900:
case 145:
case 4004:
case 3492:
case 172:
case 933:
case 1566:
case 3111:
case 3458:
case 4061:
case 509:
case 4050:
case 2642:
case 1:
case 2493:
case 3447:
case 698:
case 3316:
case 1863:
case 519:
case 3852:
case 2210:
case 507:
case 23:
case 769:
case 563:
case 1335:
case 3130:
case 20:
case 1721:
case 1357:
case 3184:
case 589:
case 1111:
case 279:
case 802:
case 2648:
case 2849:
case 349:
case 2545:
case 1874:
case 1886:
case 2431:
case 1846:
case 296:
case 2439:
case 547:
case 1753:
case 2051:
case 1691:
case 4062:
case 2544:
case 3273:
case 396:
case 722:
case 2176:
case 450:
case 2054:
case 3899:
case 2030:
case 2847:
case 2375:
case 3302:
case 3905:
case 1815:
case 361:
case 2126:
case 3342:
case 1970:
case 187:
case 1229:
case 85:
case 3372:
case 944:
case 1249:
case 1922:
case 1975:
case 2537:
case 1025:
case 750:
case 494:
case 1032:
case 2608:
case 850:
case 1679:
case 963:
case 3513:
case 2154:
case 2729:
case 30:
case 2181:
case 1826:
case 76:
case 691:
case 1040:
case 1330:
case 2184:
case 1987:
case 625:
case 224:
case 2335:
case 4065:
case 2611:
case 2078:
case 2851:
case 3784:
case 2566:
case 1858:
case 2558:
case 201:
case 1384:
case 16:
case 2780:
case 2595:
case 2704:
case 2633:
case 2191:
case 4066:
case 1354:
case 1143:
case 581:
case 671:
case 3770:
case 3465:
case 3563:
case 234:
case 1664:
case 1284:
case 545:
case 344:
case 2788:
case 2553:
case 2834:
case 2066:
case 1761:
case 3430:
case 1329:
case 3230:
case 3622:
case 3765:
case 1325:
case 101:
case 3811:
case 704:
case 812:
case 635:
case 2862:
case 286:
case 3547:
case 1297:
case 3603:
case 3272:
case 1188:
case 3732:
case 1978:
case 1616:
case 2728:
case 3084:
case 4051:
case 849:
case 83:
case 2151:
case 1720:
case 2795:
case 368:
case 461:
case 823:
case 1183:
case 733:
case 3431:
case 2177:
case 1593:
case 2743:
case 653:
case 3964:
case 3669:
case 753:
case 2604:
case 1317:
case 91:
case 2492:
case 3754:
case 2765:
case 4009:
case 2259:
case 1037:
case 1062:
case 921:
case 3625:
case 1924:
case 675:
case 3792:
case 594:
case 189:
case 800:
case 199:
case 1868:
case 96:
case 409:
case 615:
case 1769:
case 1661:
case 3032:
case 483:
case 773:
case 2370:
case 3660:
case 231:
case 673:
case 3917:
case 3007:
case 3567:
case 592:
case 2186:
case 1157:
case 712:
case 3196:
case 2744:
case 380:
case 979:
case 2904:
case 1465:
case 2710:
case 955:
case 2488:
case 1546:
case 3762:
case 352:
case 760:
case 4000:
case 3571:
case 2976:
case 3684:
case 1385:
case 552:
case 731:
case 3355:
case 2671:
case 4057:
case 3318:
case 10:
case 3187:
case 2900:
case 928:
case 734:
case 232:
case 1396:
case 3634:
case 1509:
case 2455:
case 2509:
case 153:
case 920:
case 1303:
case 1420:
case 1204:
case 84:
case 1345:
case 3598:
case 1168:
case 2571:
case 1958:
case 156:
case 2447:
case 27:
case 893:
case 3941:
case 79:
case 1797:
case 263:
case 1208:
case 2507:
case 4040:
case 892:
case 1572:
case 366:
case 3855:
case 636:
case 3645:
case 221:
case 1155:
case 37:
case 719:
case 1238:
case 2681:
case 2244:
case 4067:
case 929:
case 2106:
case 424:
case 1321:
case 203:
case 2275:
case 2046:
case 2699:
case 350:
case 1401:
case 664:
case 262:
case 527:
case 1911:
case 572:
case 1364:
case 2882:
case 3677:
case 4087:
case 2192:
case 2522:
case 889:
case 371:
case 200:
case 173:
case 3957:
case 434:
case 1510:
case 2870:
case 3780:
case 1861:
case 310:
case 423:
case 3748:
case 1658:
case 1742:
case 2025:
case 3387:
case 1556:
case 253:
case 2299:
case 2208:
case 3564:
case 2711:
case 1300:
case 3469:
case 2872:
case 1758:
case 3991:
case 1294:
case 708:
case 1475:
case 3907:
case 2314:
case 3753:
case 2857:
case 577:
case 3058:
case 1258:
case 3738:
case 3271:
case 3024:
case 44:
case 182:
case 3274:
case 3774:
case 1988:
case 1473:
case 2418:
case 2535:
case 562:
case 2969:
case 2594:
case 246:
case 3591:
case 1245:
case 2260:
case 679:
case 1607:
case 4042:
case 1379:
case 2458:
case 3726:
case 89:
case 853:
case 50:
case 2978:
case 1207:
case 3205:
case 2121:
case 2412:
case 903:
case 3913:
case 3267:
case 186:
case 1460:
case 2372:
case 514:
case 2588:
case 2008:
case 261:
case 1893:
case 1486:
case 3235:
case 3158:
case 419:
case 2937:
case 1407:
case 40:
case 1862:
case 2830:
case 949:
case 3678:
case 2518:
case 3057:
case 78:
case 512:
case 1411:
case 130:
case 3231:
case 1692:
case 3715:
case 3542:
case 1598:
case 3437:
case 436:
case 861:
case 3280:
case 3787:
case 2652:
case 4084:
case 1947:
case 2619:
case 46:
case 2510:
case 12:
case 2145:
case 2286:
case 3484:
case 63:
case 2673:
case 1985:
case 2924:
case 1045:
case 828:
case 2773:
case 2573:
case 282:
case 160:
case 3179:
case 369:
case 205:
case 3399:
case 878:
case 3830:
case 726:
case 290:
case 226:
case 2435:
case 1085:
case 3873:
case 1899:
case 4029:
case 1820:
case 2267:
case 3500:
case 3414:
case 2936:
case 763:
case 336:
case 4045:
case 1940:
case 2943:
case 2297:
case 1589:
case 2042:
case 2157:
case 2045:
case 109:
case 3879:
case 2057:
case 819:
case 3985:
case 994:
case 3667:
case 1250:
case 3470:
case 3079:
case 1800:
case 3259:
case 827:
case 2895:
case 2073:
case 1167:
case 3151:
case 617:
case 503:
case 1312:
case 4049:
case 701:
case 3456:
case 2713:
case 2591:
case 2662:
case 1808:
case 2065:
case 3558:
case 2481:
case 1990:
case 362:
case 1857:
case 4054:
case 1153:
case 3308:
case 1715:
case 478:
case 2371:
case 413:
case 1518:
case 2726:
case 1835:
case 2841:
case 3783:
case 390:
case 528:
case 3324:
case 1243:
case 2935:
case 1150:
case 3541:
case 3589:
case 3735:
case 1044:
case 1406:
case 2433:
case 1971:
case 1523:
case 1986:
case 3195:
case 3996:
case 2084:
case 4060:
case 3950:
case 2880:
case 3552:
case 3693:
case 111:
case 3931:
case 848:
case 4024:
case 2709:
case 2494:
case 2524:
case 22:
case 402:
case 2901:
case 2081:
case 877:
case 2764:
case 3944:
case 2463:
case 472:
case 2109:
case 2214:
case 1743:
case 1483:
case 2946:
case 842:
case 3999:
case 3923:
case 1071:
case 214:
case 32:
case 623:
case 2503:
case 3346:
case 2654:
case 1564:
case 2272:
case 2769:
case 825:
case 229:
case 3043:
case 3793:
case 435:
case 123:
case 1117:
case 1927:
case 3518:
case 2224:
case 954:
case 1751:
case 1668:
case 754:
case 1070:
case 1524:
case 250:
case 1984:
case 99:
case 1537:
case 1374:
case 25:
case 1131:
case 883:
case 2206:
case 2801:
case 3369:
case 3388:
case 699:
case 2301:
case 2220:
case 1673:
case 1165:
case 1022:
case 3207:
case 2838:
case 3769:
case 365:
case 2552:
case 3496:
case 787:
case 333:
case 2118:
case 3981:
case 1187:
case 2653:
case 2927:
case 3653:
case 2572:
case 3875:
case 1380:
case 2410:
case 3320:
case 3284:
case 2379:
case 3595:
case 2832:
case 1522:
case 1090:
case 2580:
case 3872:
case 654:
case 761:
case 706:
case 2498:
case 2587:
case 3293:
case 1617:
case 2754:
case 359:
case 1638:
case 1723:
case 2203:
case 4076:
case 1827:
case 3140:
case 3834:
case 3424:
case 2614:
case 3279:
case 288:
case 466:
case 3060:
case 364:
case 2598:
case 1240:
case 690:
case 824:
case 3429:
case 3805:
case 3095:
case 3936:
case 1490:
case 2383:
case 3717:
case 3011:
case 2343:
case 525:
case 1591:
case 2397:
case 3965:
case 1036:
case 816:
case 3615:
case 1557:
case 2385:
case 941:
case 1310:
case 700:
case 612:
case 2536:
case 2706:
case 3303:
case 3934:
case 339:
case 1173:
case 213:
case 1322:
case 3813:
case 1681:
case 1647:
case 1257:
case 3097:
case 2288:
case 3494:
case 1507:
case 1708:
case 607:
case 1656:
case 906:
case 2542:
case 408:
case 1637:
case 2549:
case 163:
case 2346:
case 3197:
case 1864:
case 2331:
case 784:
case 1836:
case 588:
case 462:
case 2890:
case 3050:
case 2196:
case 2610:
case 2979:
case 2525:
case 2534:
case 2725:
case 3616:
case 1251:
case 3091:
case 1740:
case 619:
case 1035:
case 458:
case 3528:
case 4023:
case 3175:
case 1041:
case 11:
case 1739:
case 3692:
case 872:
case 3186:
case 3788:
case 3733:
case 2746:
case 2459:
case 3894:
case 1946:
case 141:
case 1626:
case 886:
case 682:
case 1879:
case 480:
case 1348:
case 1011:
case 227:
case 3632:
case 490:
case 3400:
case 2897:
case 1030:
case 2300:
case 2484:
case 894:
case 401:
case 751:
case 1875:
case 326:
case 2848:
case 1620:
case 1889:
case 3662:
case 2546:
case 1021:
case 3446:
case 3825:
case 117:
case 1299:
case 2265:
case 209:
case 374:
case 3063:
case 2554:
case 1074:
case 2292:
case 3321:
case 2338:
case 1543:
case 43:
case 3963:
case 1622:
case 3605:
case 2968:
case 3744:
case 1788:
case 1424:
case 3806:
case 2749:
case 3278:
case 3947:
case 1965:
case 1142:
case 3131:
case 3521:
case 3698:
case 2243:
case 69:
case 1747:
case 3018:
case 2786:
case 2846:
case 3861:
case 1392:
case 3975:
case 287:
case 3593:
case 169:
case 2683:
case 3044:
case 736:
case 3189:
case 896:
case 2328:
case 775:
case 4043:
case 242:
case 3252:
case 1785:
case 2955:
case 2634:
case 389:
case 3164:
case 2101:
case 948:
case 3623:
case 1581:
case 749:
case 309:
case 68:
case 355:
case 2044:
case 2792:
case 887:
case 245:
case 663:
case 2624:
case 1355:
case 1134:
case 738:
case 3203:
case 1336:
case 454:
case 1956:
case 3261:
case 3828:
case 3845:
case 112:
case 2859:
case 1252:
case 3105:
case 3013:
case 610:
case 3760:
case 2006:
case 2939:
case 126:
case 3709:
case 4090:
case 3939:
case 3276:
case 4079:
case 2519:
case 2827:
case 3015:
case 3412:
case 3630:
case 2373:
case 2099:
case 2540:
case 2485:
case 3333:
case 2798:
case 3720:
case 2363:
case 3812:
case 2135:
case 1952:
case 2679:
case 1995:
case 1338:
case 3288:
case 1495:
case 3815:
case 1236:
case 2187:
case 729:
case 1606:
case 1390:
case 3729:
case 3040:
case 2951:
case 620:
case 1953:
case 810:
case 3668:
case 2845:
case 2874:
case 644:
case 1782:
case 3296:
case 2287:
case 2024:
case 1710:
case 3193:
case 3010:
case 551:
case 2420:
case 1068:
case 2333:
case 3696:
case 264:
case 2342:
case 2984:
case 1442:
case 1614:
case 2967:
case 2152:
case 1201:
case 3383:
case 1914:
case 3584:
case 93:
case 1963:
case 2000:
case 846:
case 2778:
case 2162:
case 391:
case 1901:
case 1672:
case 1687:
case 3703:
case 3356:
case 3311:
case 1792:
case 1192:
case 801:
case 1563:
case 1484:
case 3863:
case 2323:
case 14:
case 2321:
case 931:
case 405:
case 387:
case 1790:
case 1594:
case 1936:
case 498:
case 3942:
case 549:
case 2401:
case 655:
case 3341:
case 1867:
case 1083:
case 2751:
case 984:
case 901:
case 2415:
case 543:
case 1232:
case 1443:
case 2889:
case 3850:
case 3482:
case 3322:
case 923:
case 2762:
case 3232:
case 3004:
case 2290:
case 1974:
case 102:
case 1046:
case 1582:
case 3657:
case 2931:
case 975:
case 656:
case 1670:
case 2031:
case 2386:
case 2325:
case 192:
case 1048:
case 281:
case 357:
case 3785:
case 1130:
case 1326:
case 2085:
case 4048:
case 1126:
case 1211:
case 2225:
case 652:
case 2304:
case 3911:
case 830:
case 2354:
case 1235:
case 3241:
case 150:
case 4030:
case 3421:
case 1259:
case 1178:
case 164:
case 1391:
case 2022:
case 1488:
case 3085:
case 2424:
case 3411:
case 3081:
case 2878:
case 590:
case 2532:
case 2906:
case 1515:
case 2881:
case 444:
case 2672:
case 2529:
case 1530:
case 1684:
case 2615:
case 1363:
case 3860:
case 1005:
case 3266:
case 3258:
case 1660:
case 3540:
case 3904:
case 358:
case 1717:
case 759:
case 3208:
case 3474:
case 2392:
case 1405:
case 1643:
case 3236:
case 2980:
case 814:
case 1323:
case 517:
case 697:
case 49:
case 3776:
case 1175:
case 1601:
case 2174:
case 856:
case 946:
case 2245:
case 3856:
case 3671:
case 1098:
case 1269:
case 1669:
case 3366:
case 211:
case 1172:
case 2366:
case 3426:
case 1129:
case 756:
case 33:
case 2812:
case 3212:
case 811:
case 2019:
case 3466:
case 3395:
case 3237:
case 305:
case 3069:
case 1825:
case 3980:
case 3984:
case 2221:
case 2062:
case 1006:
case 1602:
case 3307:
case 725:
case 3801:
case 3067:
case 1437:
case 2583:
case 2098:
case 3167:
case 1895:
case 3730:
case 2559:
case 29:
case 3674:
case 299:
case 3061:
case 1162:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1670119201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,];
var gg_b = "1670119201/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
