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
case 337:
case 2783:
case 2057:
case 542:
case 1533:
case 3908:
case 2954:
case 2339:
case 980:
case 326:
case 3885:
case 2048:
case 1065:
case 4084:
case 3266:
case 275:
case 2301:
case 3376:
case 2738:
case 2648:
case 396:
case 3208:
case 1198:
case 707:
case 3764:
case 3531:
case 3372:
case 3098:
case 3523:
case 1084:
case 2750:
case 2467:
case 2342:
case 3370:
case 1455:
case 3507:
case 3260:
case 3594:
case 2163:
case 1287:
case 234:
case 709:
case 2337:
case 2059:
case 2856:
case 1742:
case 3935:
case 362:
case 3803:
case 1032:
case 3026:
case 3814:
case 2611:
case 1350:
case 3829:
case 435:
case 112:
case 2417:
case 1840:
case 2011:
case 2705:
case 3132:
case 871:
case 1122:
case 1636:
case 1:
case 3235:
case 2179:
case 1036:
case 2104:
case 1839:
case 4030:
case 634:
case 103:
case 1658:
case 37:
case 3622:
case 1925:
case 3147:
case 1015:
case 3149:
case 3216:
case 184:
case 1615:
case 82:
case 1120:
case 1338:
case 1383:
case 2288:
case 3620:
case 1356:
case 4032:
case 3495:
case 1739:
case 2589:
case 321:
case 3729:
case 2933:
case 1554:
case 3212:
case 89:
case 595:
case 2921:
case 3714:
case 1030:
case 1402:
case 1630:
case 474:
case 463:
case 3381:
case 3827:
case 4:
case 391:
case 3328:
case 1842:
case 1468:
case 2445:
case 4047:
case 3703:
case 4036:
case 715:
case 2405:
case 3033:
case 2616:
case 1367:
case 858:
case 2824:
case 3633:
case 4007:
case 1277:
case 666:
case 2873:
case 2355:
case 1999:
case 470:
case 2845:
case 1700:
case 1977:
case 1009:
case 3123:
case 1609:
case 3131:
case 2012:
case 1741:
case 1631:
case 819:
case 4094:
case 1623:
case 3380:
case 1598:
case 841:
case 180:
case 1031:
case 1437:
case 3584:
case 1913:
case 768:
case 1439:
case 222:
case 630:
case 2010:
case 1841:
case 170:
case 3107:
case 708:
case 1297:
case 2125:
case 1351:
case 645:
case 2893:
case 1401:
case 3382:
case 1904:
case 1997:
case 2773:
case 2745:
case 1768:
case 4031:
case 2635:
case 480:
case 3875:
case 2926:
case 817:
case 4074:
case 2817:
case 1702:
case 1279:
case 1578:
case 1369:
case 3429:
case 3911:
case 2724:
case 2306:
case 974:
case 152:
case 3371:
case 9:
case 2060:
case 2456:
case 3334:
case 3959:
case 2660:
case 2483:
case 794:
case 2867:
case 50:
case 805:
case 2302:
case 1319:
case 3961:
case 56:
case 3536:
case 2769:
case 912:
case 1522:
case 692:
case 2368:
case 1263:
case 2577:
case 206:
case 2189:
case 266:
case 1818:
case 2666:
case 833:
case 2869:
case 452:
case 1520:
case 2998:
case 2066:
case 3530:
case 3957:
case 3054:
case 846:
case 2608:
case 2851:
case 3654:
case 1154:
case 935:
case 786:
case 2947:
case 370:
case 598:
case 2734:
case 3439:
case 1795:
case 3913:
case 1382:
case 2958:
case 718:
case 2771:
case 3007:
case 3401:
case 3706:
case 2625:
case 678:
case 867:
case 3694:
case 3800:
case 528:
case 3094:
case 807:
case 2247:
case 3997:
case 1429:
case 1911:
case 44:
case 3578:
case 1843:
case 939:
case 3440:
case 2135:
case 1875:
case 1353:
case 2472:
case 1743:
case 249:
case 1427:
case 1021:
case 2557:
case 1775:
case 3442:
case 2116:
case 890:
case 3999:
case 2548:
case 3133:
case 996:
case 1131:
case 3674:
case 2230:
case 2915:
case 809:
case 3009:
case 344:
case 2112:
case 3437:
case 776:
case 820:
case 1174:
case 2834:
case 3631:
case 1109:
case 1391:
case 3818:
case 3755:
case 1515:
case 2886:
case 611:
case 2265:
case 2343:
case 3520:
case 216:
case 2375:
case 2853:
case 583:
case 3317:
case 2162:
case 1054:
case 1957:
case 1485:
case 98:
case 2108:
case 3393:
case 352:
case 2284:
case 1532:
case 2160:
case 97:
case 2395:
case 1961:
case 504:
case 2786:
case 79:
case 2984:
case 2087:
case 2481:
case 1558:
case 2428:
case 153:
case 815:
case 3855:
case 51:
case 3522:
case 3305:
case 758:
case 2881:
case 1864:
case 500:
case 2161:
case 437:
case 1184:
case 560:
case 2828:
case 2159:
case 599:
case 719:
case 2480:
case 687:
case 2663:
case 2063:
case 1678:
case 2516:
case 536:
case 2148:
case 3665:
case 656:
case 1376:
case 3588:
case 1962:
case 439:
case 251:
case 1390:
case 1266:
case 2482:
case 1885:
case 3065:
case 248:
case 1208:
case 2303:
case 2512:
case 196:
case 1509:
case 1574:
case 2781:
case 717:
case 1372:
case 1098:
case 689:
case 2314:
case 3338:
case 1912:
case 3120:
case 3615:
case 1216:
case 2790:
case 3701:
case 18:
case 335:
case 2909:
case 256:
case 402:
case 121:
case 3739:
case 2566:
case 3049:
case 3837:
case 1115:
case 3846:
case 2209:
case 1827:
case 705:
case 1381:
case 894:
case 3630:
case 3030:
case 1212:
case 47:
case 3352:
case 2562:
case 2099:
case 2699:
case 2223:
case 1328:
case 191:
case 2870:
case 3032:
case 1803:
case 2111:
case 421:
case 102:
case 162:
case 2770:
case 1935:
case 3244:
case 2097:
case 2491:
case 3742:
case 3126:
case 3632:
case 3400:
case 733:
case 3840:
case 2872:
case 2207:
case 1829:
case 3350:
case 279:
case 1443:
case 1026:
case 2613:
case 1158:
case 3839:
case 1235:
case 3746:
case 3:
case 746:
case 1910:
case 287:
case 3737:
case 2013:
case 3647:
case 1147:
case 374:
case 2876:
case 363:
case 2004:
case 3058:
case 1622:
case 2679:
case 3801:
case 303:
case 3472:
case 2204:
case 1563:
case 3135:
case 883:
case 2702:
case 2279:
case 4012:
case 1222:
case 1719:
case 2369:
case 1724:
case 323:
case 2997:
case 2094:
case 3236:
case 1745:
case 192:
case 2694:
case 3891:
case 3625:
case 985:
case 652:
case 2607:
case 3476:
case 2979:
case 4016:
case 3771:
case 3958:
case 3025:
case 3232:
case 2439:
case 2841:
case 3044:
case 3936:
case 270:
case 461:
case 1125:
case 2351:
case 3561:
case 2741:
case 3949:
case 2299:
case 2023:
case 2446:
case 2598:
case 280:
case 492:
case 1920:
case 244:
case 1612:
case 2009:
case 725:
case 2074:
case 2806:
case 3871:
case 2609:
case 1012:
case 422:
case 3496:
case 1873:
case 1355:
case 515:
case 2121:
case 3470:
case 3116:
case 3791:
case 1845:
case 2868:
case 1405:
case 873:
case 311:
case 1824:
case 1016:
case 349:
case 1819:
case 2188:
case 804:
case 1298:
case 2154:
case 1662:
case 680:
case 1341:
case 898:
case 3780:
case 3162:
case 1851:
case 1666:
case 316:
case 1767:
case 3689:
case 3089:
case 1869:
case 445:
case 3265:
case 2755:
case 4060:
case 388:
case 507:
case 1189:
case 166:
case 2818:
case 1300:
case 1278:
case 2373:
case 2855:
case 4008:
case 3428:
case 2263:
case 1579:
case 3087:
case 1867:
case 1302:
case 3984:
case 710:
case 2319:
case 1769:
case 3880:
case 1060:
case 2963:
case 130:
case 3511:
case 1483:
case 1306:
case 1438:
case 1597:
case 509:
case 4066:
case 145:
case 3782:
case 831:
case 1337:
case 922:
case 1346:
case 1883:
case 3063:
case 3480:
case 6:
case 663:
case 3535:
case 185:
case 33:
case 524:
case 134:
case 1852:
case 3161:
case 2455:
case 992:
case 3510:
case 2987:
case 475:
case 76:
case 612:
case 1750:
case 1061:
case 594:
case 2684:
case 70:
case 3327:
case 1544:
case 1850:
case 3329:
case 3486:
case 1340:
case 2989:
case 434:
case 3453:
case 3781:
case 2418:
case 901:
case 2198:
case 2065:
case 1048:
case 3482:
case 351:
case 684:
case 2588:
case 1738:
case 635:
case 4061:
case 1648:
case 85:
case 555:
case 2521:
case 1954:
case 1339:
case 640:
case 1756:
case 1657:
case 3231:
case 906:
case 860:
case 2842:
case 2468:
case 3099:
case 800:
case 1988:
case 966:
case 1424:
case 3364:
case 2554:
case 3508:
case 1419:
case 2630:
case 2740:
case 829:
case 3772:
case 3209:
case 377:
case 2383:
case 240:
case 3892:
case 2356:
case 3566:
case 2739:
case 3931:
case 235:
case 899:
case 1221:
case 2615:
case 4011:
case 2406:
case 1233:
case 750:
case 203:
case 2801:
case 3385:
case 3079:
case 3004:
case 2058:
case 274:
case 2647:
case 3013:
case 2122:
case 2636:
case 508:
case 1587:
case 2746:
case 2944:
case 2036:
case 2839:
case 3613:
case 3792:
case 2441:
case 379:
case 1611:
case 2225:
case 2350:
case 3872:
case 1417:
case 2126:
case 2632:
case 3994:
case 3697:
case 2032:
case 1453:
case 2966:
case 2098:
case 2372:
case 949:
case 783:
case 3340:
case 2262:
case 1314:
case 43:
case 3850:
case 2764:
case 3469:
case 3752:
case 148:
case 3254:
case 2208:
case 1303:
case 1728:
case 296:
case 2574:
case 3648:
case 68:
case 3738:
case 2962:
case 1157:
case 1482:
case 3048:
case 1516:
case 3657:
case 3756:
case 854:
case 2908:
case 3954:
case 3057:
case 237:
case 2165:
case 613:
case 2392:
case 2078:
case 1480:
case 947:
case 3883:
case 1063:
case 2678:
case 2960:
case 581:
case 334:
case 3838:
case 67:
case 2785:
case 13:
case 1535:
case 2260:
case 3525:
case 3852:
case 2370:
case 3061:
case 2864:
case 3750:
case 704:
case 451:
case 59:
case 239:
case 3493:
case 1004:
case 2136:
case 1079:
case 27:
case 1679:
case 518:
case 2022:
case 489:
case 1604:
case 3113:
case 1792:
case 1613:
case 3179:
case 1294:
case 2235:
case 1013:
case 213:
case 639:
case 3011:
case 3705:
case 1207:
case 4077:
case 1560:
case 2814:
case 179:
case 2803:
case 2210:
case 2935:
case 1770:
case 978:
case 1097:
case 559:
case 1896:
case 3473:
case 1562:
case 3988:
case 2703:
case 1099:
case 696:
case 1699:
case 4013:
case 1223:
case 988:
case 1870:
case 4004:
case 810:
case 3805:
case 3199:
case 2916:
case 3419:
case 3921:
case 189:
case 2212:
case 916:
case 1931:
case 221:
case 637:
case 2495:
case 1566:
case 1892:
case 626:
case 3288:
case 177:
case 3233:
case 3221:
case 2216:
case 1790:
case 28:
case 1112:
case 3920:
case 872:
case 1949:
case 2109:
case 423:
case 951:
case 3793:
case 3845:
case 361:
case 1249:
case 447:
case 1116:
case 948:
case 1470:
case 3355:
case 3873:
case 1496:
case 3220:
case 2743:
case 2633:
case 149:
case 565:
case 80:
case 2775:
case 2033:
case 3405:
case 2911:
case 1559:
case 2386:
case 3719:
case 3222:
case 2194:
case 2353:
case 1258:
case 1472:
case 1932:
case 1236:
case 3035:
case 3773:
case 1247:
case 1025:
case 2382:
case 1771:
case 3226:
case 449:
case 3144:
case 1110:
case 3922:
case 1625:
case 193:
case 546:
case 1947:
case 75:
case 2107:
case 1044:
case 1644:
case 322:
case 1734:
case 2795:
case 1232:
case 3504:
case 760:
case 253:
case 3278:
case 3452:
case 3769:
case 2464:
case 3513:
case 3302:
case 979:
case 558:
case 1753:
case 729:
case 1087:
case 3483:
case 3978:
case 541:
case 519:
case 1395:
case 3456:
case 1880:
case 3060:
case 488:
case 799:
case 1782:
case 2532:
case 3597:
case 2261:
case 850:
case 3599:
case 3062:
case 3662:
case 64:
case 1965:
case 2948:
case 3608:
case 3851:
case 736:
case 478:
case 2530:
case 3066:
case 1886:
case 1343:
case 1265:
case 1089:
case 3869:
case 3767:
case 1689:
case 743:
case 2391:
case 3189:
case 2515:
case 3580:
case 2029:
case 2917:
case 1672:
case 3975:
case 2826:
case 2014:
case 3811:
case 2614:
case 2603:
case 1897:
case 1799:
case 3435:
case 282:
case 3172:
case 490:
case 1241:
case 3243:
case 3365:
case 1425:
case 2993:
case 1090:
case 1676:
case 409:
case 1804:
case 2139:
case 1076:
case 3275:
case 2217:
case 107:
case 506:
case 1200:
case 1941:
case 838:
case 4070:
case 1567:
case 3190:
case 1813:
case 2101:
case 3176:
case 566:
case 2245:
case 3553:
case 2820:
case 214:
case 1092:
case 3586:
case 2224:
case 2146:
case 20:
case 2722:
case 1779:
case 1202:
case 2518:
case 26:
case 3192:
case 319:
case 1797:
case 2973:
case 908:
case 1696:
case 1968:
case 467:
case 2945:
case 1096:
case 3295:
case 968:
case 530:
case 109:
case 3605:
case 650:
case 3416:
case 1551:
case 2027:
case 4076:
case 2924:
case 169:
case 2433:
case 1322:
case 60:
case 994:
case 4081:
case 3358:
case 2313:
case 2502:
case 4028:
case 3857:
case 3408:
case 3336:
case 592:
case 3347:
case 3534:
case 774:
case 763:
case 3761:
case 522:
case 2397:
case 415:
case 2506:
case 672:
case 132:
case 7:
case 346:
case 1918:
case 1955:
case 1593:
case 1628:
case 3052:
case 3181:
case 2064:
case 3128:
case 2541:
case 3330:
case 784:
case 2798:
case 735:
case 115:
case 3083:
case 501:
case 1517:
case 3656:
case 3349:
case 853:
case 2878:
case 1255:
case 1320:
case 3859:
case 3460:
case 432:
case 1183:
case 3315:
case 1156:
case 365:
case 2983:
case 2252:
case 408:
case 3708:
case 907:
case 2754:
case 967:
case 1680:
case 2956:
case 3331:
case 839:
case 2938:
case 3264:
case 2501:
case 3590:
case 642:
case 2283:
case 3576:
case 1333:
case 3067:
case 357:
case 225:
case 744:
case 909:
case 2537:
case 3866:
case 3069:
case 1653:
case 386:
case 920:
case 770:
case 254:
case 1169:
case 168:
case 1682:
case 610:
case 3985:
case 2542:
case 3862:
case 1082:
case 3651:
case 2102:
case 3645:
case 1499:
case 654:
case 1246:
case 1119:
case 1124:
case 1237:
case 821:
case 3673:
case 124:
case 1173:
case 88:
case 585:
case 3624:
case 2833:
case 3019:
case 2168:
case 534:
case 3024:
case 2905:
case 2420:
case 455:
case 1550:
case 1937:
case 1744:
case 1242:
case 3227:
case 39:
case 210:
case 1725:
case 194:
case 1071:
case 1477:
case 1404:
case 3528:
case 1240:
case 424:
case 3214:
case 1825:
case 3712:
case 3229:
case 3203:
case 862:
case 1354:
case 1939:
case 1844:
case 1413:
case 3017:
case 3929:
case 3914:
case 2075:
case 3716:
case 4071:
case 2389:
case 2426:
case 3191:
case 1556:
case 3835:
case 813:
case 371:
case 242:
case 2788:
case 1497:
case 1069:
case 1592:
case 1285:
case 3686:
case 1669:
case 3053:
case 368:
case 3169:
case 1186:
case 941:
case 919:
case 587:
case 308:
case 1596:
case 3082:
case 1985:
case 579:
case 4067:
case 958:
case 1570:
case 1457:
case 1182:
case 738:
case 2527:
case 660:
case 600:
case 1651:
case 1808:
case 3680:
case 1459:
case 1860:
case 486:
case 2503:
case 4069:
case 1762:
case 1180:
case 418:
case 589:
case 1309:
case 2655:
case 577:
case 1590:
case 2316:
case 2484:
case 3789:
case 556:
case 74:
case 157:
case 1461:
case 1067:
case 3333:
case 1229:
case 42:
case 1693:
case 4019:
case 2976:
case 2774:
case 3479:
case 1093:
case 3404:
case 2709:
case 2458:
case 2731:
case 4045:
case 2641:
case 3844:
case 2723:
case 1581:
case 548:
case 2436:
case 4073:
case 2564:
case 3354:
case 1810:
case 2447:
case 2041:
case 297:
case 3193:
case 481:
case 1617:
case 3556:
case 2366:
case 863:
case 2972:
case 3201:
case 1716:
case 3583:
case 1914:
case 2276:
case 803:
case 49:
case 1411:
case 1929:
case 631:
case 2143:
case 227:
case 2000:
case 2175:
case 236:
case 2432:
case 1835:
case 3124:
case 946:
case 2068:
case 3499:
case 2585:
case 1024:
case 2602:
case 3145:
case 1019:
case 12:
case 4093:
case 1619:
case 835:
case 53:
case 324:
case 3173:
case 1171:
case 2831:
case 2270:
case 3946:
case 3937:
case 3550:
case 3071:
case 3477:
case 2606:
case 394:
case 3725:
case 1812:
case 2415:
case 19:
case 2809:
case 2195:
case 933:
case 2874:
case 3671:
case 2637:
case 1586:
case 2747:
case 3092:
case 2646:
case 2359:
case 3268:
case 21:
case 628:
case 2849:
case 2037:
case 3713:
case 2409:
case 3704:
case 204:
case 3202:
case 3779:
case 2474:
case 158:
case 1412:
case 2642:
case 3105:
case 698:
case 2732:
case 3670:
case 1295:
case 2234:
case 2127:
case 3096:
case 1582:
case 3968:
case 3070:
case 3797:
case 119:
case 369:
case 1005:
case 3206:
case 3551:
case 417:
case 2830:
case 309:
case 1943:
case 2730:
case 957:
case 737:
case 2991:
case 3799:
case 3897:
case 2114:
case 726:
case 976:
case 2129:
case 1275:
case 3690:
case 4005:
case 2715:
case 283:
case 3425:
case 516:
case 2348:
case 1243:
case 2836:
case 2847:
case 1410:
case 796:
case 1176:
case 419:
case 2639:
case 1190:
case 2291:
case 3941:
case 588:
case 307:
case 1181:
case 2280:
case 3628:
case 971:
case 78:
case 3152:
case 1330:
case 1128:
case 3681:
case 2884:
case 791:
case 1859:
case 3138:
case 446:
case 3320:
case 1683:
case 2543:
case 1056:
case 1656:
case 1349:
case 2980:
case 2575:
case 1038:
case 1591:
case 3183:
case 1638:
case 673:
case 523:
case 2286:
case 3322:
case 1848:
case 228:
case 1347:
case 1336:
case 3524:
case 762:
case 61:
case 1857:
case 702:
case 3763:
case 92:
case 1650:
case 2986:
case 4038:
case 3489:
case 1050:
case 2282:
case 2953:
case 3326:
case 2595:
case 4056:
case 713:
case 146:
case 332:
case 4083:
case 1344:
case 914:
case 848:
case 3527:
case 694:
case 1542:
case 96:
case 2151:
case 5:
case 35:
case 154:
case 722:
case 972:
case 268:
case 3018:
case 1498:
case 2787:
case 2686:
case 495:
case 851:
case 1950:
case 1537:
case 563:
case 2086:
case 2889:
case 624:
case 1118:
case 2333:
case 1155:
case 2789:
case 1539:
case 1501:
case 1256:
case 3928:
case 2388:
case 1283:
case 3281:
case 1938:
case 3312:
case 1478:
case 1983:
case 1252:
case 3529:
case 2080:
case 1754:
case 3228:
case 454:
case 3600:
case 142:
case 255:
case 2538:
case 3000:
case 1788:
case 3143:
case 327:
case 2091:
case 1643:
case 1075:
case 1389:
case 3290:
case 1675:
case 2940:
case 1100:
case 2556:
case 2193:
case 3041:
case 3308:
case 2354:
case 766:
case 3436:
case 2413:
case 2404:
case 3709:
case 3458:
case 879:
case 2901:
case 3774:
case 2479:
case 1422:
case 2825:
case 2552:
case 343:
case 4075:
case 1205:
case 3809:
case 889:
case 110:
case 3707:
case 3606:
case 2071:
case 2477:
case 1106:
case 2550:
case 3296:
case 1095:
case 300:
case 2634:
case 1695:
case 3449:
case 2744:
case 3823:
case 2242:
case 2173:
case 224:
case 1821:
case 745:
case 2145:
case 1905:
case 668:
case 877:
case 3292:
case 3585:
case 2942:
case 1102:
case 3668:
case 2499:
case 3970:
case 730:
case 3068:
case 1888:
case 3996:
case 2124:
case 1142:
case 209:
case 3271:
case 1627:
case 2902:
case 552:
case 3361:
case 1027:
case 1421:
case 2206:
case 1433:
case 269:
case 3042:
case 2797:
case 2070:
case 220:
case 632:
case 1945:
case 3127:
case 3732:
case 2105:
case 373:
case 1224:
case 2906:
case 1146:
case 10:
case 4029:
case 1722:
case 2877:
case 2779:
case 3474:
case 16:
case 304:
case 3971:
case 3409:
case 2704:
case 849:
case 3431:
case 2692:
case 3934:
case 3423:
case 3736:
case 3359:
case 482:
case 114:
case 2092:
case 3747:
case 4003:
case 207:
case 2941:
case 2200:
case 3291:
case 3357:
case 2567:
case 3749:
case 3639:
case 3039:
case 472:
case 615:
case 1822:
case 2425:
case 2676:
case 3407:
case 3001:
case 4027:
case 3114:
case 3494:
case 1140:
case 2799:
case 1003:
case 3832:
case 414:
case 2900:
case 847:
case 893:
case 1826:
case 3040:
case 1614:
case 3103:
case 2398:
case 2183:
case 2156:
case 450:
case 3575:
case 878:
case 2863:
case 3980:
case 1878:
case 2320:
case 2681:
case 4085:
case 1541:
case 1967:
case 544:
case 1664:
case 2487:
case 2081:
case 3164:
case 2593:
case 1399:
case 2628:
case 3280:
case 398:
case 620:
case 232:
case 2918:
case 570:
case 3595:
case 3986:
case 609:
case 1969:
case 2218:
case 3185:
case 2524:
case 1951:
case 1778:
case 2519:
case 1269:
case 2322:
case 3865:
case 816:
case 4064:
case 3286:
case 2573:
case 3253:
case 2410:
case 892:
case 1039:
case 4042:
case 1639:
case 1357:
case 748:
case 605:
case 1858:
case 1407:
case 1715:
case 3993:
case 665:
case 2243:
case 2365:
case 217:
case 1991:
case 1832:
case 2435:
case 822:
case 4037:
case 931:
case 41:
case 4046:
case 3629:
case 751:
case 1103:
case 1040:
case 3014:
case 473:
case 3826:
case 464:
case 2975:
case 3029:
case 3917:
case 2580:
case 3433:
case 2005:
case 3924:
case 3421:
case 73:
case 2196:
case 2170:
case 3726:
case 1830:
case 483:
case 3142:
case 4001:
case 241:
case 1732:
case 2295:
case 1127:
case 372:
case 3973:
case 3488:
case 1042:
case 104:
case 2192:
case 36:
case 3518:
case 3722:
case 30:
case 3146:
case 3219:
case 3137:
case 173:
case 1747:
case 2586:
case 314:
case 3273:
case 1359:
case 1736:
case 3363:
case 3245:
case 2553:
case 11:
case 1934:
case 2995:
case 1849:
case 1037:
case 801:
case 2332:
case 619:
case 787:
case 246:
case 3397:
case 641:
case 3969:
case 1311:
case 3898:
case 2050:
case 999:
case 1282:
case 1595:
case 2534:
case 2347:
case 3778:
case 3454:
case 2759:
case 2408:
case 538:
case 1185:
case 3502:
case 960:
case 1253:
case 3304:
case 929:
case 3379:
case 1286:
case 3085:
case 2848:
case 233:
case 789:
case 3500:
case 2591:
case 3267:
case 3377:
case 2638:
case 2460:
case 1543:
case 3878:
case 997:
case 1980:
case 845:
case 54:
case 2861:
case 2128:
case 1884:
case 1280:
case 927:
case 830:
case 936:
case 834:
case 3539:
case 2667:
case 885:
case 3155:
case 257:
case 3238:
case 2964:
case 2576:
case 3952:
case 3283:
case 671:
case 1655:
case 521:
case 276:
case 3256:
case 2590:
case 3501:
case 2264:
case 2180:
case 2309:
case 983:
case 3540:
case 2331:
case 2572:
case 2323:
case 4018:
case 2459:
case 2860:
case 1529:
case 1514:
case 3252:
case 3478:
case 2457:
case 502:
case 1527:
case 1310:
case 431:
case 91:
case 2596:
case 2862:
case 1465:
case 973:
case 3542:
case 964:
case 1018:
case 354:
case 513:
case 1335:
case 747:
case 286:
case 1618:
case 2069:
case 2866:
case 2285:
case 3950:
case 62:
case 3546:
case 218:
case 875:
case 129:
case 1415:
case 1707:
case 539:
case 1195:
case 1874:
case 778:
case 2171:
case 1992:
case 4000:
case 1449:
case 427:
case 1831:
case 100:
case 160:
case 3095:
case 2710:
case 1360:
case 436:
case 3420:
case 2024:
case 3905:
case 3168:
case 1430:
case 2019:
case 2927:
case 22:
case 3833:
case 2624:
case 199:
case 3387:
case 1068:
case 3888:
case 281:
case 2735:
case 998:
case 1794:
case 4041:
case 1143:
case 526:
case 2903:
case 676:
case 1175:
case 1600:
case 1432:
case 2835:
case 2191:
case 1366:
case 1972:
case 3043:
case 429:
case 2716:
case 4006:
case 3721:
case 1276:
case 3643:
case 2929:
case 1731:
case 4068:
case 788:
case 2810:
case 197:
case 1362:
case 3422:
case 1774:
case 499:
case 2528:
case 2093:
case 1272:
case 1709:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1747587602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,];
var gg_b = "1747587602/";

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
