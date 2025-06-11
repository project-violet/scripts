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
case 2737:
case 1449:
case 1750:
case 2462:
case 3227:
case 3447:
case 2922:
case 963:
case 851:
case 3945:
case 1658:
case 3265:
case 3771:
case 1936:
case 417:
case 172:
case 3192:
case 3538:
case 293:
case 1859:
case 1245:
case 1965:
case 3236:
case 3493:
case 1819:
case 3685:
case 3469:
case 1732:
case 3400:
case 2570:
case 1878:
case 3817:
case 2154:
case 1041:
case 2774:
case 2746:
case 1225:
case 108:
case 239:
case 580:
case 3888:
case 2798:
case 3436:
case 1301:
case 3293:
case 1675:
case 1554:
case 3111:
case 3689:
case 471:
case 1687:
case 1348:
case 174:
case 1993:
case 1396:
case 475:
case 2195:
case 1855:
case 3151:
case 1514:
case 1429:
case 1900:
case 653:
case 2942:
case 380:
case 1720:
case 2952:
case 666:
case 933:
case 1379:
case 1259:
case 318:
case 1294:
case 3217:
case 2912:
case 175:
case 1278:
case 1633:
case 4008:
case 1544:
case 3994:
case 3070:
case 628:
case 257:
case 91:
case 3919:
case 2756:
case 4041:
case 1829:
case 1957:
case 1051:
case 408:
case 3385:
case 2038:
case 3108:
case 3959:
case 2930:
case 2023:
case 3865:
case 2176:
case 1707:
case 3760:
case 1215:
case 2390:
case 2043:
case 269:
case 648:
case 1092:
case 4021:
case 1375:
case 2906:
case 1255:
case 3668:
case 1867:
case 190:
case 1524:
case 2097:
case 1387:
case 1648:
case 1740:
case 3586:
case 829:
case 3893:
case 117:
case 520:
case 3121:
case 2734:
case 3698:
case 3674:
case 3476:
case 2049:
case 266:
case 1152:
case 1286:
case 2360:
case 2309:
case 1112:
case 3986:
case 996:
case 707:
case 826:
case 657:
case 2025:
case 894:
case 2117:
case 3854:
case 2789:
case 3042:
case 2241:
case 2067:
case 2157:
case 3555:
case 2591:
case 2512:
case 2441:
case 3022:
case 3731:
case 1373:
case 1253:
case 2305:
case 2671:
case 413:
case 1944:
case 944:
case 2777:
case 922:
case 846:
case 1213:
case 981:
case 1191:
case 2530:
case 780:
case 1823:
case 43:
case 303:
case 3913:
case 2408:
case 2811:
case 985:
case 3953:
case 2029:
case 3244:
case 3424:
case 3519:
case 288:
case 886:
case 3943:
case 3346:
case 3374:
case 718:
case 236:
case 838:
case 984:
case 3214:
case 1297:
case 2841:
case 1547:
case 1569:
case 1914:
case 2055:
case 3683:
case 3824:
case 3091:
case 1999:
case 113:
case 2411:
case 693:
case 3567:
case 945:
case 2542:
case 2165:
case 3525:
case 1366:
case 1423:
case 1438:
case 2015:
case 1954:
case 1593:
case 3495:
case 1886:
case 2451:
case 1443:
case 1223:
case 1704:
case 891:
case 1673:
case 3337:
case 3844:
case 1339:
case 2522:
case 925:
case 1853:
case 1864:
case 1497:
case 2193:
case 2019:
case 3499:
case 2970:
case 3616:
case 2821:
case 1565:
case 2100:
case 3463:
case 1142:
case 253:
case 3454:
case 2169:
case 1490:
case 454:
case 563:
case 3622:
case 2828:
case 3352:
case 2833:
case 2977:
case 724:
case 3037:
case 2475:
case 68:
case 155:
case 2645:
case 3312:
case 907:
case 2556:
case 1231:
case 1102:
case 1183:
case 3764:
case 2258:
case 2394:
case 3026:
case 2279:
case 2359:
case 3330:
case 3713:
case 2985:
case 189:
case 2479:
case 785:
case 3990:
case 3074:
case 1662:
case 808:
case 2649:
case 2801:
case 2418:
case 1507:
case 10:
case 2120:
case 3903:
case 211:
case 781:
case 2287:
case 3982:
case 2458:
case 980:
case 2275:
case 2355:
case 722:
case 744:
case 1203:
case 1724:
case 2625:
case 1116:
case 2989:
case 1066:
case 874:
case 2667:
case 452:
case 976:
case 1174:
case 940:
case 1198:
case 2537:
case 31:
case 152:
case 4066:
case 149:
case 2879:
case 745:
case 2345:
case 1904:
case 2181:
case 2228:
case 2619:
case 40:
case 2678:
case 2526:
case 3016:
case 3204:
case 3738:
case 2694:
case 2659:
case 3630:
case 3166:
case 2329:
case 1532:
case 1362:
case 782:
case 4084:
case 2349:
case 64:
case 2110:
case 212:
case 1882:
case 3606:
case 2968:
case 1137:
case 2009:
case 3139:
case 3743:
case 2598:
case 1890:
case 2574:
case 3083:
case 154:
case 817:
case 2201:
case 129:
case 1763:
case 2325:
case 451:
case 1799:
case 599:
case 3342:
case 2615:
case 1126:
case 1714:
case 3797:
case 2887:
case 1581:
case 3807:
case 1471:
case 3410:
case 2568:
case 2974:
case 1641:
case 359:
case 2946:
case 2266:
case 2104:
case 3128:
case 3281:
case 3133:
case 1075:
case 3749:
case 1700:
case 3767:
case 2484:
case 559:
case 1087:
case 495:
case 3432:
case 524:
case 126:
case 3661:
case 4028:
case 763:
case 1608:
case 491:
case 3820:
case 612:
case 381:
case 24:
case 3077:
case 2435:
case 192:
case 146:
case 4048:
case 903:
case 3745:
case 385:
case 1168:
case 1805:
case 3101:
case 2873:
case 522:
case 3250:
case 1727:
case 2613:
case 3370:
case 1311:
case 3196:
case 581:
case 3148:
case 1932:
case 1271:
case 438:
case 322:
case 3210:
case 2653:
case 486:
case 273:
case 2338:
case 2323:
case 1765:
case 2466:
case 4001:
case 585:
case 1405:
case 3503:
case 584:
case 1177:
case 1341:
case 345:
case 2643:
case 2534:
case 3158:
case 3909:
case 1788:
case 3240:
case 1001:
case 341:
case 3068:
case 186:
case 979:
case 4018:
case 4079:
case 3207:
case 2902:
case 541:
case 2791:
case 3881:
case 2172:
case 3361:
case 733:
case 2589:
case 521:
case 3905:
case 756:
case 3850:
case 2839:
case 615:
case 799:
case 2712:
case 1134:
case 537:
case 1920:
case 2752:
case 3175:
case 1028:
case 2916:
case 2313:
case 1189:
case 3670:
case 1611:
case 2730:
case 3220:
case 1757:
case 3440:
case 3187:
case 2585:
case 468:
case 2364:
case 1651:
case 3832:
case 2353:
case 4075:
case 1717:
case 337:
case 325:
case 2685:
case 2929:
case 1672:
case 1784:
case 3163:
case 2400:
case 1442:
case 2523:
case 3726:
case 393:
case 3013:
case 1197:
case 2857:
case 1551:
case 2236:
case 2265:
case 802:
case 1304:
case 123:
case 2192:
case 4054:
case 1076:
case 2677:
case 2180:
case 2227:
case 2447:
case 3462:
case 593:
case 3922:
case 1143:
case 4:
case 830:
case 1024:
case 1891:
case 911:
case 1138:
case 539:
case 2061:
case 2247:
case 2427:
case 710:
case 2967:
case 3942:
case 797:
case 1766:
case 2465:
case 2689:
case 2111:
case 143:
case 906:
case 3746:
case 339:
case 2888:
case 3798:
case 2634:
case 2543:
case 1580:
case 4095:
case 483:
case 276:
case 3603:
case 1735:
case 2436:
case 17:
case 2269:
case 1806:
case 748:
case 2200:
case 1962:
case 1242:
case 1422:
case 3690:
case 1095:
case 2385:
case 3023:
case 2865:
case 3038:
case 183:
case 2108:
case 240:
case 2070:
case 2827:
case 2553:
case 1186:
case 1491:
case 2919:
case 3912:
case 788:
case 1604:
case 218:
case 1773:
case 736:
case 805:
case 443:
case 3952:
case 1230:
case 2893:
case 3702:
case 2288:
case 2121:
case 1054:
case 1508:
case 1113:
case 4076:
case 2800:
case 1842:
case 1:
case 1206:
case 2955:
case 2869:
case 1412:
case 2847:
case 1541:
case 3144:
case 1452:
case 2709:
case 793:
case 1159:
case 3961:
case 1000:
case 2042:
case 3067:
case 3421:
case 3241:
case 461:
case 3591:
case 2814:
case 3157:
case 465:
case 1681:
case 2383:
case 566:
case 1119:
case 1178:
case 328:
case 2863:
case 3360:
case 618:
case 4057:
case 2674:
case 2646:
case 3208:
case 2698:
case 2782:
case 2444:
case 1775:
case 2476:
case 366:
case 2703:
case 1870:
case 1027:
case 1461:
case 2626:
case 397:
case 3408:
case 2964:
case 2519:
case 2953:
case 2356:
case 4088:
case 3851:
case 2895:
case 1632:
case 94:
case 2316:
case 1065:
case 2559:
case 3530:
case 1036:
case 131:
case 1650:
case 434:
case 973:
case 597:
case 348:
case 620:
case 2022:
case 3441:
case 1758:
case 3512:
case 819:
case 1610:
case 3305:
case 3015:
case 2525:
case 3451:
case 1129:
case 1748:
case 98:
case 134:
case 2824:
case 1640:
case 427:
case 1381:
case 3055:
case 536:
case 3542:
case 2567:
case 1861:
case 462:
case 100:
case 588:
case 3808:
case 1992:
case 1607:
case 3136:
case 2006:
case 3609:
case 1980:
case 2374:
case 2263:
case 279:
case 2943:
case 1088:
case 4065:
case 1701:
case 3768:
case 2938:
case 3059:
case 2463:
case 3100:
case 680:
case 2923:
case 2656:
case 3193:
case 1332:
case 3094:
case 3970:
case 1125:
case 3821:
case 2844:
case 2337:
case 4000:
case 1350:
case 553:
case 1270:
case 3147:
case 165:
case 1149:
case 2052:
case 3251:
case 132:
case 1310:
case 3359:
case 1277:
case 3629:
case 3487:
case 2764:
case 3140:
case 2753:
case 1721:
case 263:
case 377:
case 1317:
case 1665:
case 641:
case 1636:
case 1573:
case 1160:
case 2505:
case 2931:
case 2037:
case 1434:
case 3645:
case 1958:
case 2622:
case 4040:
case 993:
case 2352:
case 1918:
case 460:
case 2272:
case 3828:
case 102:
case 1600:
case 3315:
case 2642:
case 625:
case 401:
case 637:
case 2472:
case 3502:
case 3896:
case 2391:
case 1081:
case 621:
case 1693:
case 3275:
case 3355:
case 3761:
case 773:
case 515:
case 3625:
case 1708:
case 1234:
case 130:
case 2982:
case 2903:
case 2306:
case 1741:
case 1289:
case 3458:
case 315:
case 2074:
case 1388:
case 2046:
case 178:
case 2509:
case 1105:
case 3418:
case 1584:
case 2166:
case 1327:
case 3770:
case 3659:
case 2630:
case 314:
case 1657:
case 2056:
case 3233:
case 2872:
case 883:
case 478:
case 3496:
case 3181:
case 3228:
case 233:
case 2016:
case 2738:
case 1020:
case 1928:
case 404:
case 2612:
case 1539:
case 4081:
case 3858:
case 659:
case 430:
case 2652:
case 3005:
case 696:
case 2135:
case 3367:
case 1300:
case 1889:
case 4050:
case 3132:
case 2691:
case 3201:
case 2002:
case 1393:
case 1268:
case 1948:
case 4010:
case 3325:
case 2184:
case 1535:
case 2606:
case 858:
case 256:
case 3296:
case 2404:
case 3546:
case 299:
case 2743:
case 685:
case 1347:
case 1834:
case 3110:
case 312:
case 1792:
case 1171:
case 1548:
case 1596:
case 32:
case 1246:
case 1426:
case 1966:
case 777:
case 1354:
case 1274:
case 2089:
case 864:
case 3484:
case 633:
case 2432:
case 1314:
case 3397:
case 2034:
case 3104:
case 3439:
case 3003:
case 1437:
case 2281:
case 3082:
case 2410:
case 898:
case 1935:
case 19:
case 259:
case 3343:
case 3090:
case 928:
case 2085:
case 3653:
case 3323:
case 1816:
case 3239:
case 2370:
case 2729:
case 1237:
case 1856:
case 2196:
case 2148:
case 1939:
case 573:
case 119:
case 3722:
case 706:
case 2232:
case 3031:
case 656:
case 3873:
case 3937:
case 1528:
case 2820:
case 1644:
case 3435:
case 910:
case 1446:
case 831:
case 800:
case 58:
case 3791:
case 1587:
case 1324:
case 1654:
case 834:
case 3866:
case 2715:
case 988:
case 663:
case 3386:
case 3983:
case 936:
case 2207:
case 1898:
case 1846:
case 4072:
case 2590:
case 2158:
case 1283:
case 1202:
case 1131:
case 38:
case 3706:
case 2118:
case 3473:
case 3534:
case 2179:
case 3273:
case 887:
case 3956:
case 3364:
case 3623:
case 225:
case 2778:
case 1826:
case 49:
case 3730:
case 1483:
case 1579:
case 953:
case 1004:
case 2810:
case 865:
case 2407:
case 3752:
case 2175:
case 2905:
case 1837:
case 1344:
case 3712:
case 2850:
case 861:
case 261:
case 1844:
case 2728:
case 3536:
case 1052:
case 3443:
case 882:
case 1162:
case 265:
case 1545:
case 1656:
case 2951:
case 3565:
case 1030:
case 3142:
case 2167:
case 1326:
case 1923:
case 1463:
case 1938:
case 3813:
case 1454:
case 2911:
case 2017:
case 3527:
case 717:
case 1616:
case 825:
case 1529:
case 3853:
case 1414:
case 837:
case 3497:
case 623:
case 2562:
case 3547:
case 3297:
case 771:
case 2607:
case 403:
case 2701:
case 775:
case 1346:
case 179:
case 1263:
case 2088:
case 1398:
case 841:
case 1254:
case 1374:
case 2748:
case 234:
case 1495:
case 3886:
case 2129:
case 986:
case 1525:
case 3423:
case 3963:
case 3366:
case 3438:
case 3954:
case 3999:
case 313:
case 1567:
case 3500:
case 2861:
case 3914:
case 4022:
case 1824:
case 53:
case 1997:
case 1637:
case 2320:
case 3976:
case 262:
case 3253:
case 885:
case 227:
case 4091:
case 1964:
case 3517:
case 1578:
case 4006:
case 2027:
case 1594:
case 1559:
case 844:
case 103:
case 1316:
case 1913:
case 3486:
case 992:
case 479:
case 3557:
case 842:
case 824:
case 298:
case 1790:
case 3286:
case 859:
case 926:
case 772:
case 3152:
case 36:
case 3635:
case 1444:
case 1646:
case 1698:
case 3062:
case 2261:
case 1555:
case 264:
case 3924:
case 1899:
case 2908:
case 247:
case 3130:
case 683:
case 2000:
case 2194:
case 1863:
case 1515:
case 3413:
case 1854:
case 2093:
case 1302:
case 2681:
case 56:
case 2291:
case 407:
case 3601:
case 3849:
case 3375:
case 517:
case 2541:
case 2412:
case 1334:
case 120:
case 3215:
case 635:
case 1709:
case 627:
case 3707:
case 899:
case 317:
case 2054:
case 1915:
case 2430:
case 1121:
case 3825:
case 2153:
case 1457:
case 1586:
case 3387:
case 2014:
case 2206:
case 390:
case 2113:
case 2099:
case 1389:
case 3633:
case 480:
case 2773:
case 3576:
case 3628:
case 1705:
case 2604:
case 1217:
case 81:
case 698:
case 3278:
case 1141:
case 1488:
case 2230:
case 3259:
case 1836:
case 371:
case 1108:
case 949:
case 3415:
case 713:
case 647:
case 1865:
case 3161:
case 952:
case 3051:
case 3957:
case 833:
case 664:
case 2095:
case 3829:
case 2521:
case 1827:
case 3917:
case 27:
case 2735:
case 661:
case 1293:
case 176:
case 1368:
case 2580:
case 3041:
case 3267:
case 665:
case 2592:
case 574:
case 2806:
case 4070:
case 1967:
case 3900:
case 3599:
case 2138:
case 508:
case 2024:
case 1597:
case 2891:
case 1151:
case 3855:
case 3249:
case 3429:
case 418:
case 3514:
case 3993:
case 374:
case 989:
case 243:
case 3815:
case 3563:
case 687:
case 3333:
case 76:
case 3328:
case 2304:
case 1945:
case 2143:
case 2739:
case 2812:
case 3679:
case 2044:
case 2784:
case 3467:
case 3021:
case 955:
case 3927:
case 107:
case 420:
case 634:
case 2551:
case 1236:
case 951:
case 1493:
case 2197:
case 1538:
case 3425:
case 3460:
case 1407:
case 3920:
case 2518:
case 3871:
case 3033:
case 3028:
case 2182:
case 182:
case 3134:
case 2004:
case 3409:
case 2579:
case 1850:
case 678:
case 2558:
case 395:
case 4089:
case 1531:
case 2256:
case 1905:
case 1794:
case 591:
case 3651:
case 121:
case 2402:
case 1220:
case 3572:
case 442:
case 424:
case 630:
case 2826:
case 1759:
case 3001:
case 1240:
case 3692:
case 467:
case 2131:
case 2283:
case 2874:
case 444:
case 1158:
case 1590:
case 2846:
case 752:
case 2654:
case 3308:
case 1881:
case 3185:
case 586:
case 1755:
case 3260:
case 184:
case 2614:
case 1715:
case 2699:
case 481:
case 3168:
case 70:
case 1232:
case 3950:
case 789:
case 3079:
case 3018:
case 3736:
case 346:
case 2528:
case 3621:
case 4068:
case 3765:
case 441:
case 3271:
case 3351:
case 144:
case 1481:
case 1148:
case 445:
case 1729:
case 2237:
case 3932:
case 546:
case 1250:
case 3727:
case 2984:
case 660:
case 3311:
case 425:
case 601:
case 437:
case 3392:
case 1749:
case 950:
case 2762:
case 1450:
case 1034:
case 3641:
case 605:
case 616:
case 1807:
case 2501:
case 3471:
case 196:
case 142:
case 2966:
case 568:
case 2426:
case 2246:
case 394:
case 3981:
case 3087:
case 3769:
case 1432:
case 96:
case 1767:
case 1089:
case 2399:
case 1743:
case 917:
case 619:
case 2780:
case 3890:
case 1606:
case 25:
case 2007:
case 3137:
case 3803:
case 2171:
case 463:
case 791:
case 2688:
case 529:
case 990:
case 3362:
case 3714:
case 2300:
case 1342:
case 3126:
case 2996:
case 2948:
case 2268:
case 1002:
case 1612:
case 349:
case 2928:
case 352:
case 2468:
case 1571:
case 2877:
case 11:
case 1135:
case 3831:
case 1652:
case 69:
case 738:
case 3198:
case 2539:
case 1322:
case 840:
case 552:
case 3532:
case 1056:
case 549:
case 2327:
case 2584:
case 1723:
case 2617:
case 133:
case 1738:
case 971:
case 2885:
case 3795:
case 4046:
case 792:
case 1306:
case 746:
case 2868:
case 433:
case 3035:
case 2477:
case 1560:
case 30:
case 1098:
case 1509:
case 1046:
case 1074:
case 1990:
case 2647:
case 2485:
case 3156:
case 3066:
case 2708:
case 589:
case 230:
case 2234:
case 41:
case 2693:
case 3203:
case 2081:
case 3282:
case 50:
case 2434:
case 2958:
case 355:
case 1312:
case 3403:
case 2160:
case 1037:
case 3776:
case 2636:
case 3482:
case 2010:
case 202:
case 2285:
case 351:
case 1272:
case 3520:
case 3490:
case 1622:
case 1804:
case 4083:
case 972:
case 499:
case 3972:
case 1026:
case 163:
case 2721:
case 3084:
case 807:
case 3231:
case 2032:
case 3102:
case 1753:
case 1970:
case 4049:
case 387:
case 3911:
case 1193:
case 1019:
case 2853:
case 674:
case 3332:
case 532:
case 1169:
case 7:
case 2995:
case 2813:
case 2565:
case 3167:
case 1100:
case 428:
case 2536:
case 2673:
case 3728:
case 3310:
case 2704:
case 1480:
case 2443:
case 2223:
case 587:
case 365:
case 3350:
case 3270:
case 1211:
case 608:
case 4067:
case 1542:
case 783:
case 2500:
case 1165:
case 1411:
case 1808:
case 2999:
case 3640:
case 1292:
case 3381:
case 2914:
case 2569:
case 1451:
case 4045:
case 2593:
case 3796:
case 2438:
case 2243:
case 2366:
case 2963:
case 2335:
case 23:
case 88:
case 3980:
case 2122:
case 500:
case 3145:
case 4029:
case 2547:
case 3562:
case 1609:
case 3992:
case 497:
case 3607:
case 1136:
case 110:
case 535:
case 2823:
case 1530:
case 1851:
case 3155:
case 873:
case 2557:
case 2191:
case 2486:
case 1785:
case 531:
case 1029:
case 3870:
case 743:
case 617:
case 3921:
case 3027:
case 2517:
case 197:
case 1408:
case 919:
case 1671:
case 77:
case 2373:
case 362:
case 2253:
case 3610:
case 1221:
case 327:
case 2213:
case 3650:
case 84:
case 1045:
case 1552:
case 3036:
case 2106:
case 4015:
case 3178:
case 2413:
case 1117:
case 1025:
case 3340:
case 99:
case 1591:
case 2924:
case 3787:
case 2453:
case 364:
case 3159:
case 2130:
case 1067:
case 1421:
case 1961:
case 347:
case 2666:
case 1789:
case 3908:
case 2635:
case 1892:
case 671:
case 3775:
case 166:
case 1049:
case 1506:
case 4094:
case 2152:
case 3941:
case 3261:
case 1208:
case 2112:
case 1880:
case 2588:
case 675:
case 2843:
case 1309:
case 3307:
case 1360:
case 4059:
case 453:
case 3:
case 1991:
case 2524:
case 558:
case 3508:
case 2478:
case 3113:
case 2494:
case 3842:
case 3430:
case 787:
case 2825:
case 3054:
case 95:
case 3153:
case 1702:
case 358:
case 4013:
case 493:
case 1144:
case 3452:
case 2707:
case 2255:
case 1906:
case 3291:
case 765:
case 169:
case 4064:
case 812:
case 2011:
case 3521:
case 814:
case 650:
case 1930:
case 1023:
case 2161:
case 383:
case 1124:
case 3252:
case 2957:
case 439:
case 2259:
case 4086:
case 1952:
case 2720:
case 66:
case 1331:
case 2628:
case 2219:
case 2633:
case 2358:
case 2278:
case 3822:
case 2993:
case 2170:
case 3766:
case 2554:
case 2900:
case 1262:
case 2249:
case 2514:
case 2969:
case 3024:
case 1195:
case 811:
case 2267:
case 2041:
case 3962:
case 2947:
case 543:
case 3806:
case 731:
case 2675:
case 762:
case 4038:
case 1603:
case 37:
case 2301:
case 2225:
case 1746:
case 735:
case 1798:
case 727:
case 3580:
case 3197:
case 1114:
case 3830:
case 613:
case 1726:
case 2878:
case 2894:
case 2467:
case 2021:
case 3442:
case 1163:
case 2927:
case 1053:
case 877:
case 2819:
case 798:
case 1922:
case 3076:
case 2449:
case 2229:
case 63:
case 1631:
case 2936:
case 3852:
case 3304:
case 323:
case 3483:
case 4090:
case 3826:
case 1730:
case 1916:
case 965:
case 760:
case 2717:
case 1884:
case 4003:
case 961:
case 1273:
case 3695:
case 1353:
case 2651:
case 1364:
case 3558:
case 3190:
case 987:
case 3256:
case 3973:
case 3344:
case 2028:
case 1752:
case 3103:
case 3518:
case 291:
case 2871:
case 42:
case 3004:
case 1386:
case 2096:
case 1697:
case 2260:
case 2940:
case 44:
case 2209:
case 3663:
case 1589:
case 4031:
case 1791:
case 1643:
case 2341:
case 2177:
case 1473:
case 651:
case 286:
case 473:
case 2001:
case 2907:
case 716:
case 1835:
case 2692:
case 3131:
case 3898:
case 238:
case 109:
case 3846:
case 3874:
case 3237:
case 2932:
case 704:
case 3856:
case 962:
case 2311:
case 1613:
case 2727:
case 3984:
case 2765:
case 48:
case 1323:
case 1926:
case 2621:
case 519:
case 173:
case 3816:
case 1338:
case 3395:
case 931:
case 409:
case 810:
case 2351:
case 2079:
case 2910:
case 848:
case 3676:
case 246:
case 292:
case 3644:
case 3533:
case 14:
case 2805:
case 1031:
case 1873:
case 1284:
case 1722:
case 3939:
case 319:
case 1686:
case 3314:
case 2981:
case 1397:
case 59:
case 1742:
case 3363:
case 3966:
case 3246:
case 3426:
case 3298:
case 3354:
case 998:
case 3274:
case 3883:
case 226:
case 3548:
case 12:
case 3624:
case 2809:
case 1998:
case 1266:
case 1946:
case 1974:
case 1090:
case 2641:
case 1568:
case 2860:
case 3935:
case 39:
case 2471:
case 1003:
case 3437:
case 652:
case 1082:
case 2392:
case 1104:
case 3762:
case 958:
case 360:
case 254:
case 3268:
case 1655:
case 1887:
case 55:
case 2714:
case 477:
case 2803:
case 869:
case 1875:
case 3171:
case 3347:
case 560:
case 3834:
case 1009:
case 1546:
case 1150:
case 1060:
case 3901:
case 3007:
case 1433:
case 1968:
case 1296:
case 1694:
case 1619:
case 1233:
case 3751:
case 1181:
case 2795:
case 1228:
case 501:
case 114:
case 1329:
case 694:
case 411:
case 1770:
case 1659:
case 316:
case 1537:
case 1005:
case 3539:
case 2550:
case 2174:
case 305:
case 1345:
case 983:
case 3020:
case 301:
case 3933:
case 3336:
case 3928:
case 252:
case 1761:
case 4005:
case 578:
case 2116:
case 1625:
case 3234:
case 3987:
case 2724:
case 3693:
case 2540:
case 2156:
case 304:
case 3669:
case 97:
case 3600:
case 2066:
case 1801:
case 3477:
case 20:
case 2035:
case 2507:
case 106:
case 1649:
case 719:
case 3647:
case 3388:
case 378:
case 3741:
case 1934:
case 414:
case 691:
case 1120:
case 177:
case 3317:
case 1319:
case 502:
case 2231:
case 1556:
case 3032:
case 1140:
case 2972:
case 3357:
case 1629:
case 3627:
case 1279:
case 923:
case 1359:
case 251:
case 1977:
case 1071:
case 2520:
case 1833:
case 3285:
case 302:
case 3109:
case 2039:
case 3050:
case 2744:
case 79:
case 3636:
case 1107:
case 3573:
case 1475:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1749632402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,];
var gg_b = "1749632402/";

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
