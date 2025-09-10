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
case 108:
case 1163:
case 3424:
case 2166:
case 1799:
case 1018:
case 2223:
case 1226:
case 3022:
case 593:
case 1198:
case 1083:
case 2086:
case 116:
case 553:
case 1295:
case 793:
case 2811:
case 2532:
case 73:
case 3278:
case 266:
case 1205:
case 661:
case 3835:
case 53:
case 3489:
case 1700:
case 863:
case 3753:
case 624:
case 3557:
case 3371:
case 1709:
case 2379:
case 1634:
case 1213:
case 2216:
case 3107:
case 2481:
case 2028:
case 727:
case 2370:
case 1381:
case 164:
case 1470:
case 3314:
case 1185:
case 1643:
case 1479:
case 3819:
case 1941:
case 3073:
case 3960:
case 3969:
case 3810:
case 2134:
case 307:
case 2143:
case 45:
case 3938:
case 3560:
case 1541:
case 997:
case 3197:
case 874:
case 3569:
case 941:
case 2062:
case 326:
case 466:
case 4045:
case 3521:
case 2678:
case 2464:
case 844:
case 2687:
case 3195:
case 718:
case 3105:
case 1770:
case 1869:
case 4086:
case 1682:
case 1178:
case 3623:
case 422:
case 1919:
case 706:
case 3208:
case 2781:
case 506:
case 1187:
case 2047:
case 3113:
case 1207:
case 3789:
case 3093:
case 3188:
case 1409:
case 3837:
case 3955:
case 311:
case 2849:
case 2309:
case 932:
case 2984:
case 3356:
case 988:
case 2894:
case 999:
case 2300:
case 2840:
case 3555:
case 1433:
case 729:
case 4028:
case 2399:
case 143:
case 529:
case 1535:
case 950:
case 1499:
case 233:
case 3724:
case 1042:
case 2202:
case 2529:
case 3003:
case 1336:
case 1297:
case 785:
case 3704:
case 2509:
case 2631:
case 3556:
case 3151:
case 3286:
case 1082:
case 1162:
case 3411:
case 2500:
case 1484:
case 23:
case 4008:
case 2909:
case 992:
case 2384:
case 3956:
case 939:
case 1732:
case 617:
case 2889:
case 418:
case 930:
case 253:
case 2944:
case 2078:
case 1131:
case 2880:
case 881:
case 3245:
case 2087:
case 3615:
case 2544:
case 293:
case 1227:
case 856:
case 1871:
case 522:
case 1936:
case 2933:
case 2599:
case 1761:
case 1429:
case 3228:
case 2741:
case 1212:
case 1147:
case 714:
case 1659:
case 3125:
case 360:
case 420:
case 1814:
case 1650:
case 3474:
case 369:
case 1276:
case 2273:
case 3072:
case 3693:
case 2150:
case 3106:
case 3639:
case 2217:
case 3501:
case 2159:
case 206:
case 2183:
case 2098:
case 2645:
case 2979:
case 6:
case 2458:
case 453:
case 2118:
case 878:
case 2710:
case 2063:
case 803:
case 1981:
case 3774:
case 3914:
case 2570:
case 1358:
case 1891:
case 4087:
case 2215:
case 3864:
case 1618:
case 1801:
case 168:
case 1145:
case 3369:
case 1683:
case 2686:
case 3622:
case 3338:
case 937:
case 2008:
case 3092:
case 1720:
case 3673:
case 1461:
case 427:
case 3247:
case 367:
case 655:
case 1729:
case 533:
case 628:
case 2735:
case 2268:
case 3054:
case 2361:
case 1225:
case 2239:
case 3617:
case 2165:
case 92:
case 695:
case 2853:
case 79:
case 17:
case 1034:
case 1432:
case 220:
case 59:
case 104:
case 3836:
case 75:
case 3404:
case 3711:
case 3002:
case 1206:
case 2203:
case 3971:
case 2046:
case 1043:
case 2081:
case 1877:
case 1221:
case 1632:
case 1563:
case 2161:
case 1767:
case 1079:
case 1813:
case 181:
case 1328:
case 1465:
case 1888:
case 1070:
case 1963:
case 2966:
case 2274:
case 3694:
case 1661:
case 3715:
case 3652:
case 3975:
case 2132:
case 1908:
case 2637:
case 3219:
case 3575:
case 3417:
case 3210:
case 3422:
case 1483:
case 2486:
case 370:
case 3703:
case 148:
case 2211:
case 238:
case 1585:
case 3907:
case 1826:
case 2823:
case 1386:
case 3997:
case 630:
case 2445:
case 917:
case 3138:
case 2943:
case 1946:
case 2934:
case 3080:
case 254:
case 983:
case 1805:
case 1345:
case 3169:
case 3235:
case 1141:
case 2543:
case 41:
case 2747:
case 1009:
case 2249:
case 3121:
case 3995:
case 955:
case 3053:
case 2252:
case 928:
case 349:
case 3674:
case 3468:
case 1807:
case 868:
case 3595:
case 3926:
case 62:
case 2982:
case 995:
case 3439:
case 2854:
case 2892:
case 3396:
case 3237:
case 2619:
case 534:
case 1987:
case 103:
case 2802:
case 1033:
case 2036:
case 1578:
case 3505:
case 758:
case 598:
case 1450:
case 2786:
case 340:
case 3722:
case 1090:
case 1978:
case 1718:
case 1442:
case 3403:
case 525:
case 351:
case 2064:
case 3588:
case 2184:
case 3977:
case 494:
case 2462:
case 3717:
case 3155:
case 391:
case 21:
case 377:
case 2635:
case 1362:
case 386:
case 3773:
case 3577:
case 2367:
case 3348:
case 3611:
case 1765:
case 2431:
case 2728:
case 2129:
case 1260:
case 16:
case 1135:
case 163:
case 2708:
case 3416:
case 1562:
case 3156:
case 3281:
case 3377:
case 480:
case 434:
case 1962:
case 1699:
case 3951:
case 1812:
case 3472:
case 3948:
case 2133:
case 1136:
case 213:
case 425:
case 365:
case 458:
case 873:
case 2010:
case 489:
case 2019:
case 498:
case 2798:
case 671:
case 697:
case 276:
case 3395:
case 2746:
case 3011:
case 1084:
case 3191:
case 3596:
case 554:
case 1482:
case 3326:
case 2822:
case 935:
case 3996:
case 594:
case 4058:
case 1387:
case 2664:
case 1827:
case 1271:
case 3906:
case 2785:
case 582:
case 623:
case 3754:
case 2289:
case 2035:
case 2559:
case 3101:
case 924:
case 2550:
case 1378:
case 782:
case 3305:
case 3792:
case 3094:
case 225:
case 1825:
case 3040:
case 2839:
case 3454:
case 659:
case 2518:
case 1385:
case 3049:
case 3492:
case 1586:
case 2787:
case 2253:
case 1256:
case 3052:
case 2893:
case 298:
case 476:
case 4019:
case 2918:
case 2778:
case 487:
case 2179:
case 688:
case 2485:
case 2868:
case 1986:
case 3236:
case 1032:
case 1545:
case 690:
case 1806:
case 1679:
case 372:
case 3402:
case 2446:
case 1443:
case 650:
case 1670:
case 3723:
case 3004:
case 3527:
case 1466:
case 3512:
case 641:
case 2498:
case 246:
case 1528:
case 1291:
case 3264:
case 136:
case 1398:
case 1851:
case 3772:
case 3912:
case 3680:
case 1928:
case 843:
case 1363:
case 3862:
case 4035:
case 3576:
case 1848:
case 3716:
case 3976:
case 2408:
case 71:
case 1333:
case 4065:
case 464:
case 324:
case 1520:
case 2444:
case 2042:
case 1529:
case 3006:
case 3613:
case 1399:
case 1920:
case 2935:
case 1804:
case 3172:
case 361:
case 1929:
case 421:
case 3861:
case 1300:
case 3025:
case 1840:
case 1894:
case 3911:
case 1849:
case 3771:
case 1984:
case 2409:
case 1292:
case 3096:
case 942:
case 3456:
case 1047:
case 2400:
case 3511:
case 2519:
case 2187:
case 2275:
case 2510:
case 3048:
case 3695:
case 2860:
case 4018:
case 3574:
case 607:
case 408:
case 965:
case 2910:
case 416:
case 2178:
case 1031:
case 898:
case 568:
case 931:
case 2364:
case 834:
case 3605:
case 3491:
case 3123:
case 3266:
case 1685:
case 1874:
case 2146:
case 1143:
case 2541:
case 2941:
case 2479:
case 2958:
case 2381:
case 1481:
case 221:
case 1370:
case 3414:
case 3154:
case 2634:
case 3012:
case 1379:
case 3756:
case 3504:
case 1932:
case 2700:
case 54:
case 3829:
case 1045:
case 3324:
case 3949:
case 3884:
case 3994:
case 2537:
case 1736:
case 2733:
case 3549:
case 1086:
case 216:
case 611:
case 2198:
case 3594:
case 887:
case 1561:
case 645:
case 2799:
case 2018:
case 122:
case 609:
case 3589:
case 2784:
case 2043:
case 3117:
case 383:
case 3833:
case 3250:
case 2665:
case 3457:
case 3580:
case 120:
case 979:
case 3989:
case 3844:
case 1628:
case 3890:
case 3173:
case 3612:
case 2034:
case 3980:
case 317:
case 3755:
case 3899:
case 81:
case 1165:
case 1853:
case 3352:
case 1437:
case 1361:
case 2225:
case 185:
case 3394:
case 543:
case 1085:
case 2729:
case 2461:
case 3524:
case 602:
case 1268:
case 1293:
case 743:
case 2720:
case 3676:
case 3075:
case 44:
case 1441:
case 2248:
case 3721:
case 4082:
case 3438:
case 2145:
case 2801:
case 2341:
case 268:
case 1570:
case 2891:
case 2981:
case 118:
case 1710:
case 1098:
case 106:
case 2186:
case 1183:
case 1719:
case 3122:
case 1979:
case 764:
case 3374:
case 3103:
case 1159:
case 1419:
case 310:
case 2276:
case 2310:
case 882:
case 127:
case 1647:
case 3130:
case 977:
case 3139:
case 2964:
case 986:
case 3168:
case 2147:
case 301:
case 3870:
case 3193:
case 3769:
case 3:
case 3421:
case 2564:
case 1933:
case 2429:
case 516:
case 1087:
case 2871:
case 2420:
case 1544:
case 773:
case 2536:
case 2131:
case 708:
case 2335:
case 0:
case 1889:
case 1944:
case 1990:
case 573:
case 1329:
case 3115:
case 1824:
case 3311:
case 3095:
case 3648:
case 3953:
case 24:
case 468:
case 3218:
case 1509:
case 3026:
case 1222:
case 3283:
case 905:
case 2082:
case 1129:
case 2260:
case 3655:
case 3972:
case 26:
case 2467:
case 829:
case 3712:
case 2135:
case 1120:
case 2269:
case 1728:
case 2765:
case 3572:
case 536:
case 1431:
case 2684:
case 1367:
case 448:
case 885:
case 647:
case 3776:
case 960:
case 2629:
case 1635:
case 3866:
case 3111:
case 1462:
case 3451:
case 3315:
case 1064:
case 2718:
case 2459:
case 818:
case 2099:
case 278:
case 3406:
case 2587:
case 2783:
case 2119:
case 806:
case 2090:
case 481:
case 1036:
case 1350:
case 2578:
case 3621:
case 2987:
case 203:
case 3174:
case 1892:
case 3393:
case 1745:
case 392:
case 1619:
case 2807:
case 2347:
case 1982:
case 339:
case 1447:
case 3261:
case 2000:
case 3523:
case 544:
case 2546:
case 640:
case 3220:
case 3796:
case 2345:
case 3427:
case 3071:
case 1943:
case 3902:
case 1445:
case 194:
case 774:
case 1534:
case 3322:
case 3954:
case 2386:
case 3882:
case 3992:
case 32:
case 1641:
case 3660:
case 2255:
case 46:
case 1318:
case 2585:
case 2895:
case 2742:
case 2418:
case 2759:
case 649:
case 2158:
case 3592:
case 2985:
case 3638:
case 1486:
case 83:
case 1762:
case 337:
case 3373:
case 1637:
case 3104:
case 3751:
case 3476:
case 1274:
case 2661:
case 2137:
case 2328:
case 281:
case 1731:
case 2070:
case 2963:
case 2888:
case 2465:
case 853:
case 691:
case 2998:
case 478:
case 296:
case 2813:
case 2079:
case 3748:
case 403:
case 3194:
case 3140:
case 1566:
case 2563:
case 1428:
case 651:
case 893:
case 3149:
case 1365:
case 3069:
case 40:
case 3060:
case 1041:
case 2201:
case 3713:
case 3475:
case 85:
case 665:
case 2308:
case 907:
case 3573:
case 3038:
case 3917:
case 2928:
case 1366:
case 2851:
case 4020:
case 631:
case 2398:
case 76:
case 146:
case 833:
case 2466:
case 3124:
case 1463:
case 56:
case 3244:
case 3726:
case 2679:
case 2945:
case 2443:
case 1446:
case 2434:
case 1343:
case 2346:
case 323:
case 463:
case 134:
case 1681:
case 2545:
case 1179:
case 503:
case 3922:
case 189:
case 1485:
case 2896:
case 3705:
case 198:
case 1170:
case 1918:
case 703:
case 2256:
case 1830:
case 2586:
case 2181:
case 2061:
case 3407:
case 158:
case 3200:
case 2825:
case 125:
case 1518:
case 2385:
case 1280:
case 350:
case 1550:
case 2378:
case 1559:
case 672:
case 1289:
case 900:
case 1542:
case 3503:
case 2029:
case 1785:
case 390:
case 1478:
case 3691:
case 1959:
case 3903:
case 2271:
case 1942:
case 3495:
case 3993:
case 388:
case 3601:
case 3055:
case 3818:
case 332:
case 2734:
case 3323:
case 1822:
case 2947:
case 1382:
case 3593:
case 3797:
case 274:
case 3939:
case 945:
case 2482:
case 1224:
case 2743:
case 1746:
case 911:
case 3930:
case 2876:
case 1190:
case 1873:
case 3372:
case 1144:
case 176:
case 556:
case 1798:
case 1567:
case 1010:
case 2766:
case 2931:
case 113:
case 1817:
case 2600:
case 596:
case 756:
case 3656:
case 1967:
case 962:
case 2531:
case 1133:
case 2136:
case 2699:
case 3270:
case 2962:
case 444:
case 3515:
case 3153:
case 3865:
case 315:
case 926:
case 3775:
case 3413:
case 710:
case 1602:
case 3479:
case 2697:
case 3277:
case 364:
case 3470:
case 3821:
case 510:
case 461:
case 3288:
case 2414:
case 2192:
case 2154:
case 946:
case 2701:
case 1107:
case 3634:
case 1197:
case 1569:
case 501:
case 1017:
case 842:
case 4025:
case 519:
case 1969:
case 1810:
case 2607:
case 107:
case 1819:
case 1538:
case 1960:
case 2076:
case 1073:
case 1692:
case 719:
case 373:
case 2675:
case 998:
case 3537:
case 3744:
case 3790:
case 958:
case 69:
case 925:
case 2540:
case 2594:
case 2027:
case 3709:
case 3108:
case 1489:
case 3700:
case 175:
case 633:
case 795:
case 528:
case 412:
case 934:
case 980:
case 755:
case 728:
case 595:
case 2820:
case 2025:
case 1285:
case 2771:
case 1356:
case 2096:
case 1093:
case 3409:
case 1188:
case 1780:
case 1837:
case 2456:
case 1955:
case 4076:
case 1113:
case 2116:
case 583:
case 145:
case 1068:
case 622:
case 109:
case 100:
case 2832:
case 3050:
case 3444:
case 3297:
case 3535:
case 3059:
case 1246:
case 2234:
case 2613:
case 1616:
case 343:
case 261:
case 2172:
case 666:
case 1921:
case 4027:
case 1858:
case 3364:
case 126:
case 2051:
case 1126:
case 2491:
case 2266:
case 1263:
case 987:
case 3519:
case 2974:
case 2401:
case 976:
case 2048:
case 1841:
case 1301:
case 3779:
case 3860:
case 3770:
case 1105:
case 3869:
case 2626:
case 3178:
case 2130:
case 1881:
case 160:
case 2265:
case 1321:
case 3814:
case 3642:
case 2139:
case 1125:
case 3659:
case 3964:
case 219:
case 2760:
case 618:
case 3147:
case 1016:
case 2088:
case 3564:
case 2421:
case 2:
case 1591:
case 2625:
case 3319:
case 1072:
case 2696:
case 1693:
case 169:
case 2115:
case 295:
case 3732:
case 2648:
case 2095:
case 2455:
case 3667:
case 34:
case 4075:
case 1956:
case 1411:
case 3162:
case 255:
case 629:
case 1704:
case 1151:
case 2553:
case 1556:
case 3082:
case 2283:
case 1286:
case 2757:
case 1148:
case 1794:
case 1615:
case 3420:
case 1749:
case 3871:
case 3131:
case 78:
case 3536:
case 2651:
case 2005:
case 3335:
case 982:
case 938:
case 3856:
case 3225:
case 2340:
case 724:
case 1440:
case 3461:
case 761:
case 1494:
case 63:
case 3296:
case 1092:
case 1449:
case 1452:
case 3337:
case 1673:
case 3128:
case 2259:
case 954:
case 3206:
case 3043:
case 1002:
case 2457:
case 3665:
case 2250:
case 2833:
case 851:
case 693:
case 3432:
case 1357:
case 2989:
case 2173:
case 401:
case 1176:
case 886:
case 994:
case 2844:
case 2755:
case 2612:
case 891:
case 2627:
case 3358:
case 3891:
case 3981:
case 1774:
case 1914:
case 3186:
case 3581:
case 3251:
case 2267:
case 2460:
case 2075:
case 512:
case 3248:
case 4095:
case 2721:
case 1127:
case 495:
case 3145:
case 3683:
case 1231:
case 368:
case 428:
case 455:
case 2322:
case 2954:
case 750:
case 4001:
case 22:
case 3742:
case 2706:
case 1703:
case 1422:
case 2592:
case 3158:
case 2638:
case 790:
case 3985:
case 799:
case 179:
case 559:
case 1235:
case 1768:
case 2229:
case 3141:
case 2502:
case 920:
case 1878:
case 1597:
case 2796:
case 1793:
case 2220:
case 1169:
case 1887:
case 1730:
case 4091:
case 860:
case 599:
case 2902:
case 1739:
case 532:
case 381:
case 3328:
case 3465:
case 3888:
case 3070:
case 3079:
case 1312:
case 2748:
case 3563:
case 2412:
case 906:
case 2152:
case 3877:
case 2149:
case 3632:
case 3221:
case 515:
case 802:
case 439:
case 1417:
case 237:
case 3508:
case 2104:
case 492:
case 2751:
case 1157:
case 1715:
case 2476:
case 1652:
case 4056:
case 1975:
case 3908:
case 1649:
case 2317:
case 741:
case 3661:
case 3620:
case 1898:
case 1351:
case 1773:
case 1415:
case 1577:
case 2916:
case 1913:
case 797:
case 1988:
case 3362:
case 1863:
case 2516:
case 1513:
case 1977:
case 2111:
case 1717:
case 757:
case 2451:
case 151:
case 597:
case 4071:
case 2091:
case 2712:
case 1241:
case 2001:
case 3467:
case 36:
case 42:
case 2655:
case 3135:
case 3238:
case 3765:
case 927:
case 3875:
case 1348:
case 1611:
case 2393:
case 1396:
case 1237:
case 1430:
case 3807:
case 437:
case 1595:
case 2368:
case 239:
case 3000:
case 1325:
case 2261:
case 2339:
case 149:
case 252:
case 1674:
case 1995:
case 2523:
case 1526:
case 3009:
case 723:
case 2496:
case 2727:
case 1053:
case 3718:
case 3459:
case 993:
case 3110:
case 1905:
case 378:
case 3099:
case 3257:
case 3783:
case 3587:
case 3090:
case 1722:
case 230:
case 284:
case 3578:
case 4014:
case 3987:
case 694:
case 303:
case 2303:
case 2843:
case 1525:
case 288:
case 807:
case 232:
case 2818:
case 4060:
case 3947:
case 497:
case 95:
case 471:
case 1326:
case 698:
case 2968:
case 2883:
case 2797:
case 2426:
case 1423:
case 1596:
case 1191:
case 3482:
case 374:
case 1702:
case 99:
case 625:
case 457:
case 3084:
case 142:
case 72:
case 3378:
case 250:
case 933:
case 1792:
case 3020:
case 1754:
case 1506:
case 3029:
case 1101:
case 2707:
case 290:
case 3387:
case 2691:
case 634:
case 680:
case 2405:
case 3271:
case 1906:
case 2903:
case 1951:
case 2279:
case 1313:
case 131:
case 1828:
case 3690:
case 3644:
case 2515:
case 2270:
case 646:
case 2153:
case 2865:
case 3633:
case 3214:
case 363:
case 875:
case 2413:
case 1416:
case 3562:
case 2775:
case 215:
case 2915:
case 2372:
case 3876:
case 3766:
case 1548:
case 1074:
case 3600:
case 1472:
case 1653:
case 3136:
case 3363:
case 3398:
case 1772:
case 3528:
case 3291:
case 800:
case 1264:
case 2069:
case 811:
case 1831:
case 271:
case 914:
case 2475:
case 432:
case 2713:
case 3201:
case 809:
case 1976:
case 2973:
case 2060:
case 2517:
case 488:
case 2189:
case 459:
case 2867:
case 613:
case 1375:
case 3848:
case 1624:
case 257:
case 2917:
case 2038:
case 862:
case 3986:
case 2354:
case 2705:
case 3896:
case 1114:
case 2522:
case 2209:
case 3586:
case 1040:
case 3825:
case 2200:
case 3061:
case 1454:
case 3385:
case 730:
case 784:
case 2057:
case 3782:
case 344:
case 3670:
case 2726:
case 1723:
case 1004:
case 552:
case 3679:
case 792:
case 3443:
case 1402:
case 3945:
case 2299:
case 539:
case 3434:
case 966:
case 2795:
case 2842:
case 592:
case 2614:
case 2233:
case 1236:
case 3545:
case 441:
case 1397:
case 1626:
case 262:
case 1574:
case 1695:
case 1974:
case 112:
case 3062:
case 1266:
case 2263:
case 1605:
case 2298:
case 621:
case 1051:
case 3182:
case 226:
case 1491:
case 963:
case 3678:
case 664:
case 2858:
case 475:
case 2195:
case 3436:
case 1688:
case 3344:
case 3390:
case 1172:
case 161:
case 1234:
case 3920:
case 1006:
case 2246:
case 3202:
case 2724:
case 3333:
case 3520:
case 245:
case 974:
case 407:
case 2113:
case 3254:
case 2789:
case 3584:
case 2188:
case 2093:
case 1096:
case 3292:
case 39:
case 4073:
case 211:
case 2780:
case 1456:
case 2177:
case 90:
case 3309:
case 3984:
case 1353:
case 2030:
case 1025:
case 3300:
case 3840:
case 3894:
case 135:
case 673:
case 2285:
case 2039:
case 4017:
case 1820:
case 3045:
case 366:
case 426:
case 1471:
case 2835:
case 3663:
case 643:
case 502:
case 275:
case 2557:
case 4015:
case 2287:
case 2753:
case 2371:
case 1027:
case 1594:
case 2424:
case 3561:
case 322:
case 2022:
case 3223:
case 1282:
case 3086:
case 3961:
case 1940:
case 3608:
case 1884:
case 1675:
case 3272:
case 2538:
case 2819:
case 409:
case 2654:
case 1607:
case 3134:
case 3685:
case 1102:
case 2938:
case 3143:
case 2569:
case 1791:
case 2197:
case 1154:
case 1701:
case 3481:
case 1192:
case 3370:
case 1697:
case 400:
case 2602:
case 3646:
case 726:
case 3686:
case 1438:
case 892:
case 2338:
case 526:
case 1075:
case 1267:
case 3441:
case 3008:
case 3645:
case 3098:
case 3118:
case 2262:
case 3970:
case 3063:
case 562:
case 2914:
case 2774:
case 1627:
case 3215:
case 884:
case 3570:
case 117:
case 1980:
case 711:
case 1755:
case 1899:
case 1844:
case 1304:
case 745:
case 1890:
case 511:
case 460:
case 1097:
case 509:
case 1259:
case 3046:
case 1117:
case 1242:
case 545:
case 2092:
case 1676:
case 500:
case 2673:
case 1524:
case 2247:
case 1007:
case 329:
case 2054:
case 3268:
case 1800:
case 3361:
case 1394:
case 64:
case 700:
case 3239:
case 1924:
case 1349:
case 3165:
case 1352:
case 67:
case 3889:
case 3944:
case 353:
case 3329:
case 3880:
case 3078:
case 3533:
case 1651:
case 1005:
case 604:
case 2749:
case 3590:
case 3544:
case 2148:
case 2794:
case 3167:
case 3599:
case 2740:
case 3222:
case 2023:
case 1283:
case 2286:
case 1553:
case 155:
case 575:
case 128:
case 2355:
case 33:
case 1648:
case 3909:
case 3384:
case 1953:
case 1455:
case 3900:
case 775:
case 269:
case 467:
case 3647:
case 2901:
case 3273:
case 1696:
case 2630:
case 3419:
case 110:
case 3150:
case 1374:
case 2501:
case 3217:
case 2106:
case 3159:
case 707:
case 2228:
case 101:
case 2591:
case 1:
case 2196:
case 1421:
case 1168:
case 1013:
case 1879:
case 1760:
case 3741:
case 4002:
case 1606:
case 507:
case 1139:
case 2125:
case 1130:
case 1265:
case 2321:
case 1077:
case 3359:
case 2846:
case 2306:
case 1303:
case 1843:
case 1174:
case 1621:
case 1232:
case 3036:
case 3350:
case 2505:
case 240:
case 3204:
case 2722:
case 2905:
case 1496:
case 2493:
case 2995:
case 2121:
case 2526:
case 3252:
case 3240:
case 2325:
case 1261:
case 3294:
case 2468:
case 2674:
case 1339:
case 572:
case 2926:
case 2595:
case 3854:
case 2439:
case 3982:
case 94:
case 3619:
case 2237:
case 772:
case 2611:
case 470:
case 3129:
case 1712:
case 1448:
case 251:
case 656:
case 1451:
case 3064:
case 2588:
case 883:
case 3184:
case 2513:
case 1516:
case 1111:
case 277:
case 31:
case 2155:
case 817:
case 1866:
case 4089:
case 2577:
case 2913:
case 2415:
case 3274:
case 449:
case 1317:
case 405:
case 4053:
case 2652:
case 2715:
case 1476:
case 2473:
case 2649:
case 895:
case 3132:
case 1104:
case 2219:
case 1751:
case 2417:
case 2575:
case 3762:
case 731:
case 137:
case 3428:
case 765:
case 3081:
case 1149:
case 3365:
case 1014:
case 3161:
case 3566:
case 565:
case 3816:
case 3731:
case 2739:
case 3534:
case 394:
case 603:
case 2887:
case 742:
case 451:
case 97:
case 3445:
case 2080:
case 2878:
case 2169:
case 486:
case 2597:
case 2235:
case 2089:
case 542:
case 279:
case 3747:
case 477:
case 2160:
case 3543:
case 678:
case 810:
case 1638:
case 3211:
case 2507:
case 2703:
case 1284:
case 1992:
case 338:
case 1660:
case 12:
case 2907:
case 1882:
case 1669:
case 749:
case 2236:
case 1233:
case 1850:
case 380:
case 3681:
case 2397:
case 1859:
case 1795:
case 3803:
case 123:
case 549:
case 812:
case 505:
case 1299:
case 2004:
case 1290:
case 1497:
case 1200:
case 465:
case 3518:
case 2454:
case 3839:
case 1209:
case 2049:
case 3253:
case 3787:
case 3830:
case 674:
case 3583:
case 3170:
case 3778:
case 3037:
case 3179:
case 1922:
case 2307:
case 3983:
case 389:
case 60:
case 3485:
case 740:
case 1777:
case 1917:
case 2576:
case 586:
case 2375:
case 442:
case 2624:
case 157:
case 577:
case 751:
case 1973:
case 1060:
case 1475:
case 2716:
case 1713:
case 786:
case 1788:
case 791:
case 777:
case 663:
case 3965:
case 2512:
case 3463:
case 1124:
case 346:
case 3498:
case 3815:
case 3058:
case 861:
case 3565:
case 2772:
case 964:
case 3366:
case 2689:
case 2653:
case 4052:
case 2472:
case 4049:
case 265:
case 88:
case 3763:
case 387:
case 3190:
case 3144:
case 3019:
case 376:
case 115:
case 1413:
case 2416:
case 1775:
case 3100:
case 2281:
case 747:
case 2551:
case 3109:
case 1488:
case 2377:
case 4004:
case 1477:
case 1270:
case 2388:
case 2951:
case 2313:
case 1279:
case 3478:
case 943:
case 3942:
case 1405:
case 770:
case 3785:
case 190:
case 3289:
case 2754:
case 1503:
case 3542:
case 2101:
case 3280:
case 3550:
case 570:
case 2792:
case 2305:
case 2845:
case 3746:
case 2395:
case 1930:
case 579:
case 159:
case 2191:
case 1797:
case 2423:
case 3822:
case 779:
case 1883:
case 1968:
case 2996:
case 188:
case 1539:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757509201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,];
var gg_b = "1757509201/";

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
