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
var o = 0;
switch (g) {
case 1462:
case 3286:
case 3007:
case 2293:
case 2954:
case 1564:
case 94:
case 3011:
case 3515:
case 2048:
case 3637:
case 1681:
case 176:
case 1473:
case 2602:
case 53:
case 1451:
case 74:
case 3504:
case 1614:
case 3625:
case 2734:
case 2486:
case 919:
case 1176:
case 1754:
case 393:
case 2779:
case 1050:
case 2380:
case 3088:
case 2787:
case 1971:
case 1299:
case 969:
case 1977:
case 3300:
case 2536:
case 1098:
case 607:
case 2148:
case 1730:
case 237:
case 3754:
case 916:
case 711:
case 1199:
case 1568:
case 2804:
case 931:
case 131:
case 552:
case 2857:
case 50:
case 201:
case 3077:
case 1295:
case 1555:
case 3542:
case 3564:
case 205:
case 3194:
case 2280:
case 1519:
case 2072:
case 2844:
case 1709:
case 2705:
case 1018:
case 3018:
case 3763:
case 3266:
case 3435:
case 451:
case 1676:
case 1944:
case 1569:
case 1521:
case 4039:
case 2915:
case 3641:
case 184:
case 2314:
case 2403:
case 3847:
case 2062:
case 1149:
case 2439:
case 2456:
case 1414:
case 2294:
case 2476:
case 3458:
case 3152:
case 995:
case 1094:
case 1608:
case 955:
case 1463:
case 2193:
case 2402:
case 579:
case 2167:
case 953:
case 101:
case 2995:
case 3817:
case 1824:
case 687:
case 2790:
case 4022:
case 2440:
case 2654:
case 395:
case 3576:
case 623:
case 2721:
case 324:
case 2070:
case 1490:
case 226:
case 2132:
case 4070:
case 4047:
case 115:
case 2368:
case 2554:
case 2040:
case 3411:
case 513:
case 208:
case 1542:
case 3484:
case 581:
case 174:
case 2741:
case 2484:
case 3472:
case 563:
case 801:
case 2600:
case 3769:
case 598:
case 585:
case 3096:
case 2795:
case 292:
case 854:
case 3770:
case 2464:
case 1508:
case 1777:
case 584:
case 1595:
case 1133:
case 524:
case 3247:
case 3547:
case 306:
case 1874:
case 3789:
case 2614:
case 359:
case 2958:
case 3070:
case 3416:
case 612:
case 2467:
case 3716:
case 1397:
case 1758:
case 2443:
case 2622:
case 2326:
case 3344:
case 3749:
case 3486:
case 3989:
case 1347:
case 3977:
case 1624:
case 336:
case 2405:
case 3167:
case 1781:
case 4:
case 219:
case 3126:
case 3643:
case 172:
case 439:
case 606:
case 2399:
case 1324:
case 294:
case 3886:
case 1035:
case 576:
case 748:
case 1901:
case 506:
case 553:
case 3630:
case 939:
case 2262:
case 3690:
case 392:
case 107:
case 323:
case 3606:
case 2434:
case 1292:
case 3357:
case 3160:
case 3099:
case 1212:
case 2920:
case 3338:
case 1677:
case 3388:
case 247:
case 2357:
case 1025:
case 832:
case 285:
case 1359:
case 2106:
case 3292:
case 788:
case 962:
case 3705:
case 2768:
case 138:
case 2876:
case 3102:
case 3681:
case 3284:
case 129:
case 1974:
case 1393:
case 2535:
case 1286:
case 2328:
case 2588:
case 843:
case 1420:
case 495:
case 257:
case 277:
case 361:
case 2110:
case 1489:
case 3310:
case 3053:
case 3700:
case 1599:
case 2796:
case 1488:
case 1092:
case 3972:
case 2042:
case 2089:
case 3850:
case 2160:
case 4038:
case 3475:
case 2751:
case 2165:
case 3870:
case 394:
case 4061:
case 1054:
case 1770:
case 1680:
case 1254:
case 1382:
case 1438:
case 4086:
case 3233:
case 4067:
case 2372:
case 2337:
case 3081:
case 140:
case 899:
case 1835:
case 3179:
case 2134:
case 2152:
case 1891:
case 3228:
case 2596:
case 2003:
case 1264:
case 1354:
case 1305:
case 3010:
case 2862:
case 2592:
case 837:
case 3545:
case 4052:
case 1106:
case 1928:
case 3945:
case 3360:
case 449:
case 425:
case 3856:
case 3110:
case 1146:
case 2567:
case 3462:
case 3603:
case 761:
case 554:
case 2019:
case 2083:
case 2111:
case 263:
case 1704:
case 3983:
case 3270:
case 1581:
case 3939:
case 1465:
case 3654:
case 2979:
case 2947:
case 194:
case 3702:
case 2323:
case 510:
case 3974:
case 1670:
case 2748:
case 1342:
case 1383:
case 350:
case 1946:
case 315:
case 403:
case 1658:
case 3249:
case 3083:
case 2783:
case 1673:
case 3297:
case 924:
case 3380:
case 4073:
case 2878:
case 2770:
case 985:
case 2653:
case 1164:
case 2865:
case 181:
case 260:
case 1431:
case 1613:
case 618:
case 3279:
case 3365:
case 1202:
case 599:
case 1183:
case 2502:
case 1515:
case 3062:
case 2093:
case 3822:
case 1293:
case 245:
case 2708:
case 1033:
case 2416:
case 3975:
case 2849:
case 2276:
case 2365:
case 2246:
case 3609:
case 2112:
case 3244:
case 817:
case 3173:
case 3293:
case 1742:
case 4026:
case 2639:
case 3245:
case 424:
case 1945:
case 2471:
case 2237:
case 3704:
case 2529:
case 3325:
case 895:
case 4091:
case 4072:
case 1674:
case 1389:
case 3655:
case 3074:
case 1491:
case 739:
case 1877:
case 3204:
case 2700:
case 2247:
case 13:
case 2684:
case 667:
case 2229:
case 1552:
case 1992:
case 1128:
case 2950:
case 300:
case 1480:
case 466:
case 4014:
case 1660:
case 864:
case 321:
case 665:
case 3209:
case 870:
case 2722:
case 1364:
case 2584:
case 619:
case 1015:
case 2711:
case 3757:
case 2981:
case 255:
case 3595:
case 1869:
case 3915:
case 1088:
case 1228:
case 1649:
case 42:
case 2428:
case 963:
case 2827:
case 827:
case 2651:
case 2754:
case 1810:
case 2728:
case 810:
case 1986:
case 3314:
case 1337:
case 139:
case 2299:
case 1669:
case 49:
case 3142:
case 2296:
case 2507:
case 1168:
case 815:
case 696:
case 3640:
case 2058:
case 2381:
case 1545:
case 378:
case 920:
case 562:
case 3068:
case 1036:
case 565:
case 2290:
case 327:
case 1970:
case 1062:
case 4068:
case 1715:
case 235:
case 1024:
case 3890:
case 3055:
case 20:
case 3296:
case 655:
case 1582:
case 186:
case 1983:
case 913:
case 1538:
case 2667:
case 2740:
case 1943:
case 2377:
case 2147:
case 2953:
case 1118:
case 143:
case 252:
case 1356:
case 1504:
case 3243:
case 925:
case 406:
case 2113:
case 1925:
case 1615:
case 3393:
case 1131:
case 2191:
case 2966:
case 1641:
case 3683:
case 3568:
case 2784:
case 472:
case 777:
case 874:
case 206:
case 2383:
case 1395:
case 4066:
case 555:
case 3697:
case 3909:
case 2500:
case 1329:
case 3729:
case 1246:
case 3275:
case 3426:
case 396:
case 2327:
case 591:
case 322:
case 863:
case 1348:
case 2052:
case 3670:
case 135:
case 3035:
case 3628:
case 984:
case 1601:
case 3246:
case 3188:
case 2568:
case 2699:
case 1145:
case 2189:
case 3322:
case 773:
case 646:
case 2236:
case 3849:
case 3355:
case 2884:
case 1960:
case 3527:
case 2524:
case 467:
case 705:
case 155:
case 2451:
case 2321:
case 1188:
case 1973:
case 3984:
case 1579:
case 3830:
case 3425:
case 3092:
case 1386:
case 693:
case 1918:
case 3607:
case 2726:
case 78:
case 150:
case 3746:
case 270:
case 3415:
case 2594:
case 758:
case 2841:
case 2881:
case 3602:
case 244:
case 3396:
case 945:
case 36:
case 2022:
case 1470:
case 3119:
case 1671:
case 3953:
case 1331:
case 224:
case 669:
case 3071:
case 398:
case 1794:
case 1408:
case 658:
case 2312:
case 404:
case 3100:
case 875:
case 2743:
case 1639:
case 3821:
case 342:
case 1104:
case 1864:
case 3548:
case 2782:
case 1262:
case 3479:
case 2342:
case 2386:
case 168:
case 262:
case 2104:
case 1527:
case 2583:
case 2056:
case 1178:
case 2618:
case 1226:
case 2573:
case 376:
case 2086:
case 2965:
case 1192:
case 2858:
case 2840:
case 865:
case 998:
case 3374:
case 3418:
case 2195:
case 671:
case 3076:
case 2627:
case 3205:
case 3213:
case 1848:
case 842:
case 905:
case 3931:
case 3540:
case 928:
case 2245:
case 890:
case 1234:
case 1358:
case 3951:
case 1288:
case 1163:
case 2084:
case 3574:
case 2351:
case 3155:
case 1439:
case 1078:
case 751:
case 2729:
case 3259:
case 1818:
case 1617:
case 1858:
case 477:
case 4077:
case 27:
case 3146:
case 2212:
case 1745:
case 2999:
case 1076:
case 647:
case 1663:
case 1057:
case 1317:
case 1452:
case 112:
case 1566:
case 1953:
case 674:
case 481:
case 196:
case 2408:
case 3719:
case 417:
case 2404:
case 2597:
case 3919:
case 3825:
case 3150:
case 2757:
case 1037:
case 2390:
case 1060:
case 3979:
case 2217:
case 2171:
case 649:
case 1662:
case 2018:
case 1483:
case 1518:
case 3093:
case 2875:
case 3528:
case 1980:
case 1771:
case 4019:
case 2472:
case 2941:
case 1401:
case 3585:
case 699:
case 100:
case 3710:
case 1044:
case 824:
case 1934:
case 1598:
case 811:
case 104:
case 192:
case 2213:
case 1989:
case 2552:
case 833:
case 358:
case 2211:
case 1666:
case 1856:
case 1341:
case 2306:
case 975:
case 2799:
case 3332:
case 2409:
case 629:
case 55:
case 297:
case 2166:
case 142:
case 2085:
case 2343:
case 1206:
case 3676:
case 2632:
case 1528:
case 1119:
case 3917:
case 407:
case 3727:
case 2544:
case 3884:
case 4089:
case 610:
case 3058:
case 3865:
case 1912:
case 2234:
case 3337:
case 489:
case 587:
case 2685:
case 1306:
case 302:
case 593:
case 2199:
case 1379:
case 937:
case 3848:
case 2348:
case 2977:
case 3858:
case 1204:
case 3460:
case 3898:
case 2971:
case 608:
case 2579:
case 2423:
case 697:
case 4044:
case 1691:
case 2758:
case 3735:
case 2429:
case 2926:
case 2087:
case 488:
case 1726:
case 2572:
case 1056:
case 1032:
case 2005:
case 858:
case 2704:
case 4018:
case 2116:
case 1282:
case 1559:
case 61:
case 1338:
case 3837:
case 158:
case 3555:
case 821:
case 869:
case 2785:
case 452:
case 762:
case 3709:
case 3153:
case 3815:
case 1449:
case 1656:
case 971:
case 852:
case 871:
case 921:
case 1734:
case 714:
case 2098:
case 1124:
case 273:
case 9:
case 546:
case 3104:
case 1787:
case 3497:
case 2322:
case 2989:
case 3949:
case 3962:
case 4083:
case 3170:
case 274:
case 83:
case 2238:
case 1014:
case 2201:
case 943:
case 1776:
case 3996:
case 2894:
case 3281:
case 75:
case 2982:
case 79:
case 1550:
case 3944:
case 4082:
case 4000:
case 4031:
case 3422:
case 1955:
case 3653:
case 3535:
case 661:
case 2033:
case 2303:
case 1719:
case 3843:
case 2518:
case 3195:
case 3234:
case 769:
case 2695:
case 2161:
case 3954:
case 1380:
case 3353:
case 2603:
case 1196:
case 2305:
case 3935:
case 719:
case 3312:
case 161:
case 906:
case 295:
case 379:
case 371:
case 823:
case 377:
case 1606:
case 3162:
case 764:
case 3567:
case 2206:
case 3399:
case 3862:
case 3086:
case 473:
case 2333:
case 21:
case 659:
case 2180:
case 3840:
case 3965:
case 2258:
case 3961:
case 3206:
case 3144:
case 180:
case 1938:
case 1006:
case 2720:
case 4065:
case 2092:
case 2644:
case 2553:
case 3417:
case 3090:
case 1075:
case 3252:
case 2557:
case 2075:
case 2444:
case 331:
case 3686:
case 743:
case 2898:
case 3801:
case 1369:
case 3762:
case 2366:
case 1696:
case 2924:
case 991:
case 2157:
case 2371:
case 333:
case 737:
case 1626:
case 2988:
case 1782:
case 2442:
case 2645:
case 1477:
case 2616:
case 915:
case 1816:
case 2100:
case 0:
case 3464:
case 2135:
case 3256:
case 3481:
case 902:
case 1929:
case 1597:
case 2170:
case 1694:
case 1441:
case 43:
case 1775:
case 2692:
case 320:
case 3652:
case 293:
case 259:
case 3021:
case 1966:
case 1385:
case 2774:
case 2911:
case 1175:
case 3506:
case 780:
case 990:
case 3695:
case 3863:
case 2146:
case 1252:
case 1169:
case 768:
case 1675:
case 638:
case 775:
case 2497:
case 543:
case 742:
case 1143:
case 491:
case 933:
case 2800:
case 3163:
case 605:
case 3283:
case 3224:
case 1659:
case 731:
case 1888:
case 1235:
case 2250:
case 3180:
case 3881:
case 3693:
case 4079:
case 3963:
case 2419:
case 2764:
case 3342:
case 569:
case 648:
case 3350:
case 3794:
case 1580:
case 2513:
case 3807:
case 173:
case 1209:
case 1784:
case 1355:
case 1223:
case 2808:
case 1963:
case 2457:
case 856:
case 341:
case 3132:
case 3900:
case 3667:
case 1913:
case 421:
case 961:
case 1653:
case 1763:
case 1013:
case 2531:
case 3663:
case 2450:
case 3922:
case 3005:
case 3276:
case 1557:
case 873:
case 3318:
case 785:
case 3672:
case 1231:
case 930:
case 368:
case 2198:
case 3747:
case 1539:
case 1218:
case 1257:
case 2752:
case 2141:
case 1482:
case 1892:
case 34:
case 2775:
case 120:
case 3482:
case 1430:
case 3874:
case 4036:
case 1868:
case 1450:
case 1020:
case 978:
case 409:
case 4007:
case 2545:
case 1125:
case 3623:
case 1147:
case 3910:
case 2432:
case 1574:
case 362:
case 989:
case 2816:
case 175:
case 3465:
case 3452:
case 713:
case 498:
case 3828:
case 2847:
case 2183:
case 2697:
case 1157:
case 2310:
case 3389:
case 2387:
case 3255:
case 1214:
case 3802:
case 1686:
case 2350:
case 3141:
case 2155:
case 1185:
case 1158:
case 795:
case 798:
case 892:
case 3519:
case 1416:
case 2017:
case 3632:
case 3321:
case 879:
case 2526:
case 1294:
case 2686:
case 496:
case 3725:
case 2011:
case 3792:
case 2354:
case 86:
case 3803:
case 3892:
case 1001:
case 3009:
case 575:
case 803:
case 3773:
case 3806:
case 1631:
case 2417:
case 1792:
case 2076:
case 447:
case 763:
case 3122:
case 1570:
case 3358:
case 3897:
case 781:
case 4076:
case 2465:
case 3372:
case 2263:
case 3161:
case 3713:
case 3467:
case 1940:
case 1964:
case 4094:
case 1047:
case 3129:
case 45:
case 3079:
case 2694:
case 3164:
case 2930:
case 3894:
case 4093:
case 1812:
case 3502:
case 2990:
case 3718:
case 111:
case 1808:
case 2945:
case 1896:
case 3761:
case 3617:
case 490:
case 1572:
case 2619:
case 729:
case 304:
case 1281:
case 32:
case 152:
case 529:
case 2610:
case 1136:
case 2730:
case 1722:
case 84:
case 2797:
case 3913:
case 299:
case 2044:
case 2925:
case 572:
case 3316:
case 747:
case 3805:
case 476:
case 2455:
case 1312:
case 771:
case 1739:
case 3480:
case 1217:
case 3326:
case 900:
case 2273:
case 3236:
case 217:
case 3512:
case 2532:
case 3608:
case 2609:
case 1823:
case 2948:
case 2108:
case 1142:
case 1820:
case 1819:
case 119:
case 2962:
case 242:
case 3282:
case 2125:
case 3767:
case 2574:
case 1167:
case 318:
case 1151:
case 2612:
case 3026:
case 3273:
case 2043:
case 1593:
case 11:
case 2378:
case 3485:
case 2736:
case 1609:
case 106:
case 3937:
case 2541:
case 1086:
case 3446:
case 3097:
case 65:
case 1445:
case 656:
case 156:
case 1019:
case 93:
case 3905:
case 2115:
case 1849:
case 1949:
case 1138:
case 469:
case 2109:
case 3335:
case 3520:
case 1411:
case 2837:
case 209:
case 708:
case 3765:
case 2159:
case 3756:
case 1296:
case 860:
case 2964:
case 1316:
case 968:
case 651:
case 191:
case 1879:
case 1661:
case 901:
case 637:
case 1313:
case 3369:
case 1509:
case 3842:
case 3781:
case 339:
case 1275:
case 2543:
case 859:
case 3895:
case 151:
case 47:
case 2713:
case 3473:
case 952:
case 2642:
case 3536:
case 509:
case 2458:
case 2566:
case 2063:
case 530:
case 349:
case 2780:
case 1101:
case 1272:
case 3424:
case 2967:
case 203:
case 2369:
case 847:
case 548:
case 216:
case 132:
case 3451:
case 541:
case 1315:
case 2241:
case 1756:
case 1534:
case 1583:
case 3032:
case 673:
case 885:
case 976:
case 1586:
case 2184:
case 1902:
case 1853:
case 1926:
case 2208:
case 2842:
case 1165:
case 222:
case 4080:
case 2907:
case 3791:
case 770:
case 3128:
case 39:
case 1956:
case 1403:
case 15:
case 4049:
case 594:
case 3992:
case 2944:
case 1802:
case 2932:
case 2903:
case 2585:
case 1311:
case 2054:
case 73:
case 2993:
case 3477:
case 3423:
case 317:
case 590:
case 1373:
case 3854:
case 1170:
case 2581:
case 2664:
case 1921:
case 2833:
case 813:
case 2478:
case 1894:
case 2504:
case 3882:
case 1749:
case 1712:
case 1061:
case 3578:
case 1410:
case 627:
case 3594:
case 2731:
case 3688:
case 1762:
case 1189:
case 3311:
case 412:
case 760:
case 3809:
case 1115:
case 200:
case 1531:
case 3257:
case 1854:
case 319:
case 1795:
case 2255:
case 149:
case 2914:
case 1436:
case 2719:
case 2839:
case 1197:
case 1362:
case 2349:
case 1831:
case 3065:
case 1376:
case 1975:
case 1994:
case 2503:
case 2300:
case 3684:
case 1344:
case 2828:
case 726:
case 3800:
case 722:
case 2384:
case 2838:
case 622:
case 314:
case 3659:
case 2038:
case 2396:
case 2680:
case 734:
case 1695:
case 2859:
case 2984:
case 2433:
case 2677:
case 834:
case 2636:
case 2549:
case 589:
case 3264:
case 12:
case 3642:
case 2483:
case 2397:
case 1817:
case 436:
case 3309:
case 420:
case 271:
case 3288:
case 4095:
case 1729:
case 3045:
case 1707:
case 1314:
case 2952:
case 1811:
case 2916:
case 632:
case 2049:
case 3278:
case 189:
case 2788:
case 444:
case 1958:
case 2203:
case 1907:
case 2866:
case 531:
case 2462:
case 1705:
case 438:
case 3598:
case 1724:
case 3941:
case 1102:
case 904:
case 3267:
case 1267:
case 787:
case 2316:
case 1256:
case 876:
case 794:
case 1880:
case 3386:
case 464:
case 2777:
case 1698:
case 3782:
case 1424:
case 423:
case 202:
case 3171:
case 3202:
case 2081:
case 2615:
case 1638:
case 3237:
case 557:
case 2215:
case 1190:
case 3560:
case 1741:
case 550:
case 2831:
case 1374:
case 4037:
case 558:
case 1562:
case 159:
case 2102:
case 3087:
case 2972:
case 701:
case 51:
case 3701:
case 1023:
case 3254:
case 177:
case 1654:
case 3044:
case 3392:
case 2050:
case 1205:
case 2376:
case 3816:
case 2745:
case 1806:
case 1017:
case 356:
case 1997:
case 2905:
case 37:
case 538:
case 3797:
case 80:
case 2824:
case 3657:
case 2427:
case 2810:
case 3867:
case 1090:
case 2002:
case 2061:
case 3615:
case 169:
case 2224:
case 2411:
case 911:
case 520:
case 431:
case 1085:
case 2012:
case 2595:
case 3932:
case 3827:
case 3048:
case 3616:
case 1803:
case 1832:
case 3592:
case 1751:
case 313:
case 549:
case 4021:
case 3401:
case 2114:
case 948:
case 3648:
case 3833:
case 3561:
case 1714:
case 3783:
case 3724:
case 427:
case 1589:
case 3889:
case 1959:
case 2401:
case 2318:
case 448:
case 3618:
case 3085:
case 2963:
case 2151:
case 3433:
case 3116:
case 3873:
case 3760:
case 3899:
case 2633:
case 3947:
case 3971:
case 400:
case 2672:
case 1502:
case 3853:
case 733:
case 3610:
case 2817:
case 2479:
case 2665:
case 188:
case 1826:
case 435:
case 1458:
case 1577:
case 82:
case 3242:
case 3000:
case 666:
case 3620:
case 718:
case 3868:
case 643:
case 122:
case 774:
case 1765:
case 2746:
case 2650:
case 3750:
case 3888:
case 3511:
case 3720:
case 3290:
case 4058:
case 434:
case 3952:
case 500:
case 2976:
case 2233:
case 441:
case 956:
case 2540:
case 3878:
case 4088:
case 957:
case 3517:
case 917:
case 1852:
case 2230:
case 2683:
case 2530:
case 23:
case 312:
case 388:
case 3798:
case 3084:
case 1352:
case 1350:
case 909:
case 2635:
case 2716:
case 3904:
case 724:
case 3679:
case 2091:
case 2251:
case 3072:
case 1242:
case 3834:
case 1833:
case 2712:
case 418:
case 1486:
case 831:
case 2448:
case 2324:
case 1268:
case 2385:
case 559:
case 2867:
case 3101:
case 19:
case 519:
case 3948:
case 3136:
case 2493:
case 692:
case 3091:
case 1072:
case 1565:
case 2466:
case 511:
case 2582:
case 2470:
case 3022:
case 709:
case 456:
case 230:
case 3453:
case 2164:
case 1732:
case 1708:
case 4057:
case 1772:
case 3978:
case 1587:
case 820:
case 3216:
case 789:
case 4045:
case 2956:
case 108:
case 1865:
case 2623:
case 141:
case 615:
case 630:
case 2604:
case 17:
case 3151:
case 2578:
case 3111:
case 2973:
case 940:
case 570:
case 1152:
case 1607:
case 2702:
case 1872:
case 814:
case 2789:
case 800:
case 35:
case 3187:
case 1551:
case 912:
case 2437:
case 1779:
case 1790:
case 2133:
case 1690:
case 501:
case 1687:
case 1900:
case 2032:
case 1446:
case 2577:
case 1308:
case 4025:
case 2776:
case 1468:
case 2481:
case 364:
case 2338:
case 2974:
case 1529:
case 4050:
case 3726:
case 3274:
case 1274:
case 2269:
case 1814:
case 1991:
case 3307:
case 1746:
case 2906:
case 537:
case 3454:
case 1919:
case 2361:
case 3420:
case 1679:
case 2024:
case 2818:
case 1899:
case 516:
case 950:
case 740:
case 1793:
case 3210:
case 136:
case 3998:
case 2861:
case 2421:
case 243:
case 3108:
case 3985:
case 2144:
case 1981:
case 1126:
case 3942:
case 3373:
case 1702:
case 853:
case 3924:
case 2969:
case 3208:
case 2137:
case 1387:
case 3778:
case 4033:
case 3550:
case 3177:
case 4006:
case 2006:
case 3430:
case 2691:
case 3038:
case 1492:
case 2562:
case 882:
case 1887:
case 1766:
case 3012:
case 1750:
case 1748:
case 3753:
case 2480:
case 1840:
case 721:
case 2759:
case 2275:
case 1351:
case 2703:
case 1861:
case 2638:
case 1073:
case 499:
case 2931:
case 8:
case 3298:
case 246:
case 3521:
case 1813:
case 3121:
case 1232:
case 4087:
case 2908:
case 2899:
case 4055:
case 1952:
case 3371:
case 386:
case 1554:
case 3930:
case 3394:
case 3294:
case 2179:
case 2205:
case 836:
case 91:
case 2119:
case 1093:
case 1603:
case 2681:
case 2900:
case 2030:
case 4062:
case 2055:
case 1796:
case 3382:
case 3934:
case 2710:
case 384:
case 81:
case 577:
case 2046:
case 2957:
case 1532:
case 717:
case 1007:
case 2823:
case 3112:
case 2317:
case 2172:
case 3980:
case 1920:
case 3940:
case 3613:
case 3812:
case 3717:
case 2065:
case 1961:
case 1215:
case 2499:
case 183:
case 3251:
case 3313:
case 704:
case 2331:
case 806:
case 2913:
case 1511:
case 1417:
case 2221:
case 3621:
case 402:
case 1948:
case 3324:
case 2868:
case 2426:
case 1590:
case 1224:
case 1328:
case 2724:
case 3787:
case 2854:
case 2848:
case 2558:
case 1045:
case 4034:
case 2360:
case 166:
case 3271:
case 3469:
case 3758:
case 3841:
case 261:
case 4001:
case 2959:
case 3295:
case 805:
case 908:
case 1442:
case 4017:
case 1405:
case 1843:
case 410:
case 239:
case 1368:
case 2998:
case 2551:
case 1271:
case 3779:
case 212:
case 2826:
case 3285:
case 3755:
case 351:
case 1425:
case 2272:
case 3883:
case 754:
case 4040:
case 3229:
case 1247:
case 457:
case 2082:
case 2413:
case 535:
case 580:
case 3181:
case 2261:
case 1457:
case 1889:
case 2656:
case 2301:
case 2175:
case 1764:
case 3990:
case 2506:
case 3333:
case 2257:
case 3375:
case 3635:
case 1711:
case 3533:
case 1512:
case 2910:
case 236:
case 1067:
case 3098:
case 250:
case 399:
case 2410:
case 2460:
case 2569:
case 1233:
case 1162:
case 238:
case 3745:
case 1985:
case 2942:
case 2256:
case 2812:
case 2756:
case 2793:
case 2216:
case 910:
case 2670:
case 1321:
case 2218:
case 551:
case 702:
case 1786:
case 374:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1661940002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,];
var gg_b = "1661940002/";

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
