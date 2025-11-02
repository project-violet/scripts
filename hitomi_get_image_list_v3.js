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
case 1733:
case 2149:
case 2494:
case 3916:
case 2208:
case 2393:
case 3050:
case 2823:
case 3968:
case 3761:
case 196:
case 2120:
case 2187:
case 2237:
case 1076:
case 3757:
case 2529:
case 9:
case 1055:
case 3975:
case 3439:
case 2470:
case 246:
case 2687:
case 1015:
case 2540:
case 2890:
case 3717:
case 3700:
case 2725:
case 866:
case 2098:
case 3633:
case 902:
case 1157:
case 1661:
case 1117:
case 836:
case 443:
case 1042:
case 3333:
case 3162:
case 1803:
case 3305:
case 3830:
case 3105:
case 1657:
case 2567:
case 1509:
case 1300:
case 816:
case 3486:
case 2499:
case 2144:
case 3818:
case 1617:
case 2879:
case 1600:
case 181:
case 978:
case 157:
case 616:
case 2519:
case 1369:
case 2638:
case 2742:
case 2650:
case 899:
case 4032:
case 88:
case 280:
case 379:
case 2607:
case 2338:
case 2350:
case 4077:
case 3727:
case 3780:
case 2150:
case 3764:
case 294:
case 2853:
case 524:
case 3926:
case 1501:
case 2288:
case 2491:
case 636:
case 2110:
case 2107:
case 1169:
case 25:
case 850:
case 3044:
case 3235:
case 139:
case 50:
case 1589:
case 1164:
case 404:
case 3406:
case 3398:
case 1327:
case 3203:
case 1897:
case 2005:
case 716:
case 1680:
case 182:
case 1627:
case 1218:
case 1664:
case 2715:
case 2521:
case 2062:
case 321:
case 2641:
case 3685:
case 1180:
case 905:
case 2514:
case 1230:
case 325:
case 1883:
case 119:
case 3385:
case 1258:
case 1463:
case 1050:
case 3504:
case 3076:
case 3970:
case 396:
case 82:
case 2939:
case 1010:
case 1007:
case 3581:
case 2253:
case 1717:
case 584:
case 2888:
case 968:
case 3015:
case 499:
case 3055:
case 2416:
case 3994:
case 2125:
case 938:
case 1975:
case 4086:
case 1333:
case 3835:
case 3100:
case 1305:
case 1162:
case 1633:
case 517:
case 3361:
case 2986:
case 1605:
case 209:
case 2934:
case 1818:
case 2720:
case 2787:
case 537:
case 381:
case 3617:
case 3161:
case 1105:
case 956:
case 1830:
case 1362:
case 3943:
case 2749:
case 1133:
case 3317:
case 3300:
case 1858:
case 4039:
case 3509:
case 2376:
case 2155:
case 3669:
case 179:
case 3025:
case 1780:
case 2872:
case 3991:
case 2808:
case 2274:
case 3369:
case 2223:
case 3560:
case 2676:
case 1448:
case 357:
case 604:
case 263:
case 2115:
case 930:
case 4006:
case 344:
case 2837:
case 458:
case 1565:
case 2315:
case 1992:
case 3584:
case 72:
case 776:
case 228:
case 1764:
case 2948:
case 1087:
case 3501:
case 2176:
case 2741:
case 598:
case 545:
case 3547:
case 369:
case 1769:
case 2596:
case 1828:
case 3627:
case 1698:
case 2342:
case 382:
case 3680:
case 704:
case 339:
case 4048:
case 1044:
case 2522:
case 2738:
case 2642:
case 1406:
case 2750:
case 1203:
case 3327:
case 2061:
case 3164:
case 3380:
case 3589:
case 3364:
case 3180:
case 319:
case 843:
case 3883:
case 436:
case 2142:
case 2906:
case 2279:
case 62:
case 676:
case 121:
case 466:
case 1488:
case 1612:
case 3173:
case 3490:
case 1729:
case 3870:
case 2014:
case 348:
case 3111:
case 1352:
case 608:
case 829:
case 2562:
case 3151:
case 2054:
case 412:
case 2839:
case 951:
case 3124:
case 3167:
case 3611:
case 2533:
case 3673:
case 3423:
case 3226:
case 594:
case 1047:
case 432:
case 49:
case 1089:
case 3311:
case 55:
case 489:
case 3624:
case 672:
case 3894:
case 1875:
case 3651:
case 3292:
case 3479:
case 1145:
case 3935:
case 1084:
case 800:
case 3712:
case 3340:
case 3065:
case 2682:
case 2418:
case 1767:
case 2263:
case 2466:
case 2886:
case 3752:
case 2430:
case 1711:
case 2232:
case 3129:
case 875:
case 1645:
case 772:
case 1724:
case 1036:
case 3140:
case 3078:
case 395:
case 4095:
case 871:
case 1751:
case 2019:
case 1060:
case 1345:
case 1958:
case 1966:
case 675:
case 3621:
case 2972:
case 2701:
case 3891:
case 2908:
case 3413:
case 3216:
case 2067:
case 3256:
case 461:
case 1196:
case 2784:
case 1270:
case 3354:
case 1719:
case 1472:
case 1622:
case 2051:
case 3154:
case 1892:
case 934:
case 3275:
case 340:
case 4046:
case 3121:
case 600:
case 1294:
case 411:
case 1437:
case 2073:
case 1322:
case 2848:
case 2011:
case 1826:
case 1759:
case 2946:
case 2365:
case 1721:
case 2102:
case 3997:
case 1928:
case 1754:
case 771:
case 392:
case 3119:
case 872:
case 2665:
case 775:
case 1714:
case 3538:
case 808:
case 1576:
case 949:
case 629:
case 2678:
case 2428:
case 3359:
case 2602:
case 3983:
case 2747:
case 31:
case 3510:
case 3507:
case 3659:
case 1151:
case 3291:
case 3740:
case 2517:
case 3816:
case 811:
case 1367:
case 2309:
case 2923:
case 1490:
case 815:
case 2557:
case 3856:
case 712:
case 563:
case 3488:
case 186:
case 2782:
case 2609:
case 148:
case 1111:
case 1667:
case 1624:
case 3152:
case 2561:
case 861:
case 1311:
case 3875:
case 835:
case 1544:
case 79:
case 732:
case 298:
case 1324:
case 2109:
case 1167:
case 865:
case 1351:
case 3047:
case 2990:
case 1423:
case 762:
case 2096:
case 747:
case 3112:
case 1673:
case 1587:
case 2104:
case 1329:
case 1520:
case 245:
case 1712:
case 241:
case 2231:
case 3145:
case 1935:
case 1479:
case 4090:
case 1629:
case 408:
case 1903:
case 3767:
case 195:
case 654:
case 1140:
case 3724:
case 689:
case 662:
case 3345:
case 3966:
case 2381:
case 927:
case 1593:
case 307:
case 1843:
case 2403:
case 2206:
case 3773:
case 2304:
case 69:
case 4023:
case 3645:
case 191:
case 1129:
case 862:
case 765:
case 993:
case 1453:
case 1614:
case 2147:
case 1354:
case 906:
case 3196:
case 889:
case 1621:
case 2052:
case 1314:
case 2564:
case 735:
case 3122:
case 761:
case 1216:
case 1891:
case 520:
case 3322:
case 3696:
case 3437:
case 3826:
case 3622:
case 3472:
case 2347:
case 3408:
case 2913:
case 3396:
case 3294:
case 2778:
case 1121:
case 3542:
case 2971:
case 2702:
case 1275:
case 140:
case 3892:
case 3714:
case 1159:
case 2684:
case 2301:
case 16:
case 661:
case 3928:
case 2863:
case 2136:
case 3721:
case 2483:
case 3515:
case 475:
case 1119:
case 13:
case 192:
case 4013:
case 3754:
case 2569:
case 2234:
case 1510:
case 1507:
case 11:
case 2184:
case 1796:
case 2360:
case 3081:
case 1319:
case 974:
case 2336:
case 3004:
case 2877:
case 3576:
case 2101:
case 1538:
case 1722:
case 400:
case 615:
case 2636:
case 1359:
case 1550:
case 3415:
case 3267:
case 882:
case 1691:
case 2016:
case 1969:
case 1821:
case 3455:
case 3392:
case 1438:
case 819:
case 2706:
case 1450:
case 3896:
case 264:
case 3211:
case 343:
case 3692:
case 422:
case 977:
case 1410:
case 1407:
case 2469:
case 3326:
case 234:
case 5:
case 2075:
case 3822:
case 2464:
case 2884:
case 3229:
case 1441:
case 3998:
case 1553:
case 1086:
case 3791:
case 3240:
case 2801:
case 502:
case 199:
case 2663:
case 1859:
case 2941:
case 2632:
case 2377:
case 1964:
case 2332:
case 2860:
case 703:
case 1819:
case 1370:
case 1579:
case 425:
case 1194:
case 3221:
case 3175:
case 3356:
case 1420:
case 1867:
case 2809:
case 1487:
case 421:
case 255:
case 3214:
case 3675:
case 2535:
case 1222:
case 3116:
case 2092:
case 739:
case 1824:
case 1873:
case 1394:
case 644:
case 3168:
case 924:
case 3375:
case 4044:
case 1811:
case 2987:
case 1048:
case 1170:
case 657:
case 1493:
case 2920:
case 769:
case 1296:
case 116:
case 3588:
case 803:
case 1840:
case 2457:
case 3063:
case 1143:
case 3933:
case 4049:
case 376:
case 2944:
case 4087:
case 32:
case 4020:
case 90:
case 1829:
case 2400:
case 1768:
case 1756:
case 1961:
case 1643:
case 1775:
case 2804:
case 3794:
case 2278:
case 669:
case 3219:
case 1957:
case 1523:
case 479:
case 505:
case 3595:
case 501:
case 2461:
case 3032:
case 1574:
case 1917:
case 1900:
case 3962:
case 1199:
case 990:
case 3691:
case 1455:
case 3821:
case 2763:
case 1192:
case 293:
case 1415:
case 518:
case 3212:
case 523:
case 2070:
case 3410:
case 1326:
case 1251:
case 821:
case 1822:
case 3191:
case 1224:
case 1273:
case 1476:
case 984:
case 1392:
case 825:
case 143:
case 3980:
case 3086:
case 1791:
case 1240:
case 3553:
case 4055:
case 917:
case 2331:
case 2106:
case 3571:
case 38:
case 1229:
case 2485:
case 2099:
case 2631:
case 2802:
case 2498:
case 2043:
case 556:
case 496:
case 3034:
case 3726:
case 2131:
case 3245:
case 2281:
case 1985:
case 1508:
case 350:
case 403:
case 366:
case 530:
case 2558:
case 2566:
case 3670:
case 1799:
case 3420:
case 1316:
case 1668:
case 822:
case 1852:
case 336:
case 1616:
case 419:
case 3370:
case 1356:
case 1368:
case 3449:
case 1221:
case 2925:
case 2091:
case 1375:
case 1156:
case 3873:
case 104:
case 3493:
case 3296:
case 3048:
case 3170:
case 2247:
case 2139:
case 3851:
case 1675:
case 3694:
case 510:
case 1116:
case 3222:
case 3699:
case 2284:
case 2134:
case 3031:
case 2386:
case 3756:
case 3768:
case 3590:
case 3840:
case 1905:
case 1588:
case 2686:
case 358:
case 3143:
case 1259:
case 444:
case 3006:
case 1845:
case 3343:
case 1595:
case 457:
case 3444:
case 1962:
case 1794:
case 2433:
case 4025:
case 3775:
case 3523:
case 2334:
case 2260:
case 3957:
case 1219:
case 980:
case 3954:
case 2608:
case 2337:
case 2422:
case 3095:
case 551:
case 495:
case 3921:
case 3532:
case 4002:
case 4078:
case 2496:
case 707:
case 2308:
case 2293:
case 1023:
case 283:
case 3447:
case 491:
case 555:
case 2876:
case 1783:
case 1922:
case 1531:
case 2108:
case 95:
case 2172:
case 108:
case 994:
case 4065:
case 3088:
case 2287:
case 2815:
case 2220:
case 3205:
case 1548:
case 354:
case 3233:
case 3183:
case 1478:
case 826:
case 270:
case 332:
case 39:
case 2592:
case 2003:
case 973:
case 2346:
case 2965:
case 3197:
case 1128:
case 205:
case 2902:
case 2771:
case 2146:
case 3919:
case 2713:
case 1257:
case 312:
case 3383:
case 486:
case 1465:
case 3959:
case 1217:
case 3864:
case 1079:
case 3262:
case 3484:
case 201:
case 753:
case 2238:
case 3037:
case 514:
case 2695:
case 100:
case 3008:
case 2210:
case 1534:
case 2825:
case 3072:
case 46:
case 2688:
case 626:
case 946:
case 3973:
case 67:
case 3718:
case 3911:
case 552:
case 492:
case 43:
case 2:
case 534:
case 3758:
case 3766:
case 175:
case 1071:
case 1118:
case 3861:
case 3481:
case 2445:
case 1227:
case 2097:
case 3940:
case 1130:
case 3046:
case 440:
case 1166:
case 1158:
case 129:
case 2516:
case 3135:
case 2241:
case 2790:
case 1358:
case 1366:
case 361:
case 3103:
case 1862:
case 1482:
case 278:
case 587:
case 331:
case 549:
case 1318:
case 3857:
case 2850:
case 1914:
case 795:
case 1577:
case 963:
case 2113:
case 372:
case 791:
case 4060:
case 3797:
case 1869:
case 2746:
case 1921:
case 1095:
case 86:
case 2371:
case 2414:
case 686:
case 3090:
case 1563:
case 1088:
case 2671:
case 2353:
case 210:
case 81:
case 2454:
case 3922:
case 4001:
case 2737:
case 691:
case 2984:
case 132:
case 4047:
case 3261:
case 3898:
case 2708:
case 2419:
case 2901:
case 1205:
case 1880:
case 2772:
case 4089:
case 3478:
case 1233:
case 695:
case 3217:
case 2841:
case 2018:
case 24:
case 840:
case 3079:
case 2030:
case 1683:
case 748:
case 3128:
case 1197:
case 112:
case 2058:
case 3257:
case 920:
case 453:
case 300:
case 2451:
case 71:
case 2323:
case 4004:
case 3534:
case 2909:
case 223:
case 2543:
case 218:
case 2411:
case 3735:
case 1037:
case 2276:
case 2473:
case 1766:
case 3013:
case 76:
case 2255:
case 2849:
case 238:
case 1973:
case 2690:
case 371:
case 2123:
case 895:
case 2887:
case 1911:
case 2820:
case 3053:
case 1409:
case 1718:
case 268:
case 2467:
case 1046:
case 2028:
case 115:
case 3227:
case 1303:
case 1404:
case 909:
case 3833:
case 886:
case 3158:
case 740:
case 2594:
case 1929:
case 111:
case 61:
case 256:
case 63:
case 692:
case 3630:
case 3318:
case 165:
case 2440:
case 47:
case 426:
case 161:
case 1135:
case 3945:
case 574:
case 2981:
case 1285:
case 66:
case 3482:
case 3618:
case 3264:
case 3539:
case 3862:
case 4083:
case 1052:
case 2471:
case 638:
case 1239:
case 2413:
case 2654:
case 3972:
case 2891:
case 668:
case 2321:
case 1765:
case 2614:
case 3067:
case 478:
case 756:
case 1147:
case 3937:
case 3784:
case 1012:
case 377:
case 402:
case 1347:
case 2154:
case 1913:
case 3760:
case 3736:
case 2275:
case 1971:
case 1689:
case 240:
case 84:
case 159:
case 184:
case 1527:
case 943:
case 1953:
case 2114:
case 1389:
case 897:
case 3011:
case 1580:
case 3102:
case 3178:
case 1286:
case 768:
case 3946:
case 1384:
case 1601:
case 830:
case 117:
case 2082:
case 3665:
case 2159:
case 738:
case 1301:
case 1684:
case 860:
case 3029:
case 1877:
case 2619:
case 1101:
case 2722:
case 142:
case 3789:
case 718:
case 2359:
case 2796:
case 1184:
case 21:
case 1234:
case 3747:
case 137:
case 2659:
case 1923:
case 2173:
case 401:
case 286:
case 1782:
case 3014:
case 3054:
case 3839:
case 3562:
case 405:
case 579:
case 2124:
case 2367:
case 1974:
case 1500:
case 3533:
case 198:
case 630:
case 856:
case 1109:
case 2611:
case 3505:
case 4035:
case 2351:
case 1096:
case 3781:
case 1990:
case 2423:
case 2226:
case 2624:
case 2311:
case 2651:
case 2544:
case 2373:
case 1231:
case 30:
case 2712:
case 1181:
case 2629:
case 976:
case 64:
case 2903:
case 3418:
case 2899:
case 710:
case 2065:
case 818:
case 3886:
case 697:
case 3458:
case 3466:
case 3430:
case 3382:
case 145:
case 2752:
case 3232:
case 3834:
case 760:
case 3059:
case 1979:
case 1304:
case 483:
case 291:
case 3277:
case 1381:
case 1604:
case 3019:
case 2593:
case 2843:
case 525:
case 1067:
case 596:
case 3765:
case 2196:
case 3012:
case 870:
case 226:
case 1937:
case 2270:
case 3564:
case 3239:
case 1972:
case 1701:
case 6:
case 2122:
case 1908:
case 2437:
case 702:
case 3647:
case 359:
case 1598:
case 2408:
case 2719:
case 2396:
case 3347:
case 2472:
case 801:
case 3689:
case 3971:
case 3778:
case 2294:
case 4028:
case 678:
case 1665:
case 468:
case 1029:
case 2555:
case 3684:
case 3301:
case 1946:
case 1365:
case 3483:
case 3286:
case 2515:
case 883:
case 2928:
case 1102:
case 317:
case 3832:
case 3234:
case 1806:
case 3360:
case 2081:
case 1378:
case 950:
case 1165:
case 1302:
case 423:
case 418:
case 342:
case 3101:
case 3660:
case 602:
case 3636:
case 1678:
case 1602:
case 2312:
case 497:
case 4066:
case 1839:
case 936:
case 1054:
case 3500:
case 2816:
case 4030:
case 1021:
case 2652:
case 2291:
case 44:
case 3923:
case 966:
case 2868:
case 2856:
case 3782:
case 3609:
case 1014:
case 705:
case 4018:
case 557:
case 3022:
case 398:
case 683:
case 3248:
case 2047:
case 1263:
case 1466:
case 569:
case 1430:
case 410:
case 2084:
case 341:
case 2145:
case 1418:
case 2767:
case 519:
case 2724:
case 460:
case 2751:
case 2345:
case 2958:
case 3381:
case 2060:
case 3403:
case 1834:
case 1232:
case 3681:
case 3304:
case 548:
case 1676:
case 3519:
case 3638:
case 1426:
case 3310:
case 3307:
case 586:
case 2448:
case 163:
case 3742:
case 1837:
case 1115:
case 3650:
case 1492:
case 2780:
case 1872:
case 1274:
case 3559:
case 1808:
case 2764:
case 113:
case 394:
case 128:
case 3138:
case 2087:
case 3853:
case 2926:
case 1290:
case 2565:
case 2049:
case 1655:
case 3871:
case 2992:
case 35:
case 1522:
case 3141:
case 2235:
case 2185:
case 932:
case 99:
case 2406:
case 2398:
case 3005:
case 4092:
case 1596:
case 2828:
case 1710:
case 3963:
case 989:
case 3715:
case 591:
case 3521:
case 1017:
case 3554:
case 3062:
case 2431:
case 221:
case 2198:
case 3977:
case 1057:
case 2385:
case 3341:
case 451:
case 1625:
case 774:
case 3494:
case 3393:
case 2007:
case 3874:
case 1069:
case 1545:
case 1895:
case 2761:
case 1325:
case 2050:
case 3823:
case 2038:
case 3237:
case 1744:
case 540:
case 3529:
case 1125:
case 2582:
case 3649:
case 1271:
case 1253:
case 2717:
case 693:
case 2700:
case 1456:
case 3349:
case 1888:
case 1027:
case 3511:
case 53:
case 4075:
case 1080:
case 3725:
case 3246:
case 915:
case 2605:
case 109:
case 3573:
case 3524:
case 2333:
case 464:
case 674:
case 2305:
case 3644:
case 3551:
case 2434:
case 706:
case 4016:
case 2362:
case 1512:
case 2486:
case 2283:
case 1749:
case 2866:
case 2858:
case 3567:
case 965:
case 3085:
case 3499:
case 1934:
case 3144:
case 2041:
case 935:
case 51:
case 4068:
case 3492:
case 427:
case 3376:
case 1610:
case 972:
case 2669:
case 1338:
case 1559:
case 3808:
case 2798:
case 3274:
case 2991:
case 257:
case 1638:
case 3223:
case 2536:
case 3837:
case 1491:
case 651:
case 15:
case 2584:
case 1107:
case 2169:
case 849:
case 3615:
case 908:
case 1150:
case 328:
case 3290:
case 887:
case 1138:
case 2501:
case 3710:
case 3596:
case 814:
case 2547:
case 269:
case 2680:
case 3342:
case 239:
case 3522:
case 2432:
case 2380:
case 2589:
case 3642:
case 3750:
case 2327:
case 1514:
case 2230:
case 2364:
case 755:
case 1977:
case 507:
case 2266:
case 864:
case 1341:
case 2463:
case 219:
case 3000:
case 2664:
case 3906:
case 2218:
case 1521:
case 1062:
case 1554:
case 1641:
case 474:
case 526:
case 1693:
case 2504:
case 1187:
case 2970:
case 2733:
case 320:
case 3625:
case 3895:
case 2705:
case 1874:
case 3545:
case 3069:
case 2581:
case 1208:
case 1620:
case 1687:
case 614:
case 3468:
case 3456:
case 3213:
case 1320:
case 1387:
case 2994:
case 975:
case 851:
case 2835:
case 2661:
case 734:
case 2117:
case 2803:
case 2999:
case 1644:
case 1551:
case 764:
case 1246:
case 3986:
case 687:
case 1098:
case 1573:
case 649:
case 752:
case 2157:
case 309:
case 1344:
case 3787:
case 1144:
case 3934:
case 1499:
case 1085:
case 3720:
case 2617:
case 2600:
case 281:
case 285:
case 3512:
case 553:
case 2300:
case 2943:
case 1374:
case 3250:
case 2967:
case 3395:
case 1411:
case 1623:
case 3238:
case 1276:
case 2037:
case 1473:
case 659:
case 1424:
case 1674:
case 3695:
case 2072:
case 3825:
case 1323:
case 3207:
case 3779:
case 4029:
case 1123:
case 543:
case 2911:
case 1215:
case 2409:
case 2718:
case 1467:
case 1599:
case 1390:
case 2766:
case 1255:
case 3452:
case 1174:
case 138:
case 3195:
case 690:
case 4011:
case 3575:
case 1844:
case 3982:
case 1594:
case 4073:
case 2635:
case 1795:
case 2940:
case 2046:
case 3774:
case 4024:
case 1028:
case 3097:
case 2335:
case 477:
case 784:
case 4051:
case 1788:
case 261:
case 3516:
case 1679:
case 2800:
case 2817:
case 1429:
case 3241:
case 4067:
case 378:
case 790:
case 2103:
case 898:
case 1440:
case 4019:
case 2954:
case 3608:
case 3337:
case 1171:
case 2869:
case 1807:
case 2095:
case 2489:
case 1746:
case 1225:
case 2532:
case 383:
case 2447:
case 3372:
case 3637:
case 3293:
case 4059:
case 1838:
case 698:
case 130:
case 1671:
case 837:
case 3855:
case 110:
case 1353:
case 741:
case 3172:
case 842:
case 867:
case 745:
case 1653:
case 1313:
case 2563:
case 504:
case 3137:
case 1947:
case 2088:
case 3815:
case 1708:
case 1419:
case 2460:
case 2827:
case 3526:
case 2205:
case 2880:
case 289:
case 2697:
case 2233:
case 2183:
case 1737:
case 3035:
case 29:
case 1984:
case 890:
case 52:
case 3003:
case 2397:
case 1459:
case 1936:
case 3146:
case 645:
case 884:
case 2197:
case 305:
case 2683:
case 3902:
case 4021:
case 859:
case 197:
case 4054:
case 1960:
case 212:
case 1841:
case 3753:
case 2959:
case 1591:
case 2383:
case 2262:
case 2484:
case 641:
case 921:
case 1695:
case 2269:
case 3323:
case 1210:
case 677:
case 467:
case 442:
case 1825:
case 318:
case 903:
case 3893:
case 1250:
case 4045:
case 3623:
case 2912:
case 437:
case 3255:
case 3849:
case 3390:
case 417:
case 2013:
case 338:
case 2071:
case 275:
case 1452:
case 1412:
case 271:
case 3123:
case 1779:
case 3690:
case 3820:
case 2053:
case 368:
case 2586:
case 3215:
case 3028:
case 2227:
case 3795:
case 599:
case 2166:
case 1982:
case 3242:
case 2118:
case 3844:
case 459:
case 58:
case 2658:
case 2666:
case 4052:
case 1568:
case 3429:
case 1241:
case 2358:
case 4012:
case 550:
case 3788:
case 2618:
case 178:
case 2264:
case 2023:
case 3850:
case 1496:
case 1308:
case 330:
case 566:
case 3153:
case 3838:
case 1337:
case 1672:
case 1422:
case 3225:
case 2797:
case 2074:
case 3807:
case 3810:
case 3414:
case 208:
case 516:
case 3371:
case 441:
case 1287:
case 1815:
case 3947:
case 1137:
case 2090:
case 2996:
case 1220:
case 3353:
case 310:
case 1249:
case 445:
case 2922:
case 70:
case 1172:
case 3454:
case 3984:
case 1035:
case 3737:
case 1842:
case 939:
case 498:
case 2328:
case 3459:
case 1003:
case 1346:
case 1965:
case 3772:
case 2898:
case 3419:
case 2478:
case 170:
case 1646:
case 2465:
case 3591:
case 2200:
case 2885:
case 3841:
case 3018:
case 60:
case 34:
case 101:
case 3936:
case 1146:
case 3058:
case 397:
case 919:
case 2254:
case 2616:
case 1518:
case 1639:
case 4062:
case 2799:
case 1566:
case 1558:
case 3809:
case 2668:
case 1339:
case 986:
case 613:
case 355:
case 948:
case 2675:
case 1289:
case 1139:
case 2425:
case 4033:
case 3503:
case 633:
case 3535:
case 2116:
case 2156:
case 204:
case 3920:
case 3734:
case 1247:
case 3457:
case 554:
case 2063:
case 1201:
case 45:
case 562:
case 547:
case 3739:
case 2770:
case 276:
case 1134:
case 22:
case 59:
case 1386:
case 532:
case 3265:
case 494:
case 3400:
case 763:
case 512:
case 1236:
case 3804:
case 2077:
case 995:
case 2794:
case 3202:
case 1405:
case 2219:
case 1334:
case 2845:
case 3881:
case 3461:
case 1634:
case 1209:
case 3056:
case 3583:
case 193:
case 3938:
case 1976:
case 2455:
case 3016:
case 3910:
case 1763:
case 2626:
case 709:
case 2476:
case 1648:
case 2392:
case 2211:
case 1732:
case 243:
case 3706:
case 3597:
case 1528:
case 364:
case 3469:
case 2692:
case 1955:
case 2251:
case 3075:
case 2822:
case 334:
case 620:
case 1106:
case 3132:
case 1099:
case 96:
case 3363:
case 1865:
case 833:
case 2791:
case 3801:
case 992:
case 515:
case 93:
case 863:
case 1331:
case 91:
case 535:
case 2985:
case 2508:
case 3941:
case 2442:
case 3377:
case 174:
case 720:
case 1606:
case 3632:
case 565:
case 609:
case 3836:
case 1204:
case 3427:
case 1306:
case 3677:
case 3480:
case 3566:
case 3558:
case 2670:
case 2420:
case 1993:
case 2487:
case 694:
case 155:
case 4000:
case 3530:
case 4017:
case 2579:
case 65:
case 4057:
case 236:
case 2449:
case 1786:
case 3639:
case 2394:
case 2873:
case 4061:
case 2811:
case 1987:
case 2170:
case 1734:
case 508:
case 773:
case 2851:
case 3289:
case 2824:
case 3284:
case 3134:
case 3462:
case 2031:
case 75:
case 3882:
case 1417:
case 1400:
case 413:
case 2829:
case 1265:
case 3386:
case 2840:
case 1457:
case 2143:
case 1739:
case 2343:
case 673:
case 2574:
case 780:
case 2775:
case 1202:
case 2643:
case 3186:
case 3433:
case 888:
case 3236:
case 2523:
case 3334:
case 2957:
case 3405:
case 327:
case 2691:
case 2854:
case 2039:
case 1910:
case 1907:
case 2969:
case 2821:
case 500:
case 114:
case 2391:
case 1583:
case 4064:
case 3209:
case 3976:
case 2814:
case 646:
case 409:
case 575:
case 3955:
case 2407:
case 3094:
case 134:
case 4080:
case 1075:
case 152:
case 1597:
case 164:
case 1706:
case 2450:
case 1847:
case 3915:
case 2553:
case 2980:
case 2086:
case 299:
case 746:
case 1663:
case 1282:
case 1132:
case 1464:
case 3106:
case 880:
case 3865:
case 1363:
case 3485:
case 2513:
case 4069:
case 2792:
case 3802:
case 3043:
case 1332:
case 187:
case 2819:
case 2034:
case 2726:
case 3131:
case 3281:
case 85:
case 1632:
case 3606:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1762048801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,];
var gg_b = "1762048801/";

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
