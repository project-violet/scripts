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
case 1296:
case 2432:
case 2410:
case 956:
case 3733:
case 3111:
case 4059:
case 3586:
case 289:
case 1943:
case 382:
case 1410:
case 157:
case 1432:
case 2296:
case 669:
case 3102:
case 2943:
case 189:
case 4076:
case 531:
case 3809:
case 3269:
case 802:
case 2578:
case 3185:
case 1396:
case 3560:
case 3735:
case 3326:
case 1277:
case 2396:
case 521:
case 813:
case 3369:
case 2394:
case 4009:
case 2018:
case 3594:
case 2569:
case 1888:
case 1526:
case 546:
case 288:
case 2961:
case 1524:
case 101:
case 1035:
case 402:
case 1717:
case 1123:
case 1284:
case 2286:
case 4028:
case 3859:
case 3671:
case 3152:
case 2524:
case 201:
case 2360:
case 1634:
case 1444:
case 1386:
case 1260:
case 1800:
case 413:
case 2827:
case 2831:
case 1384:
case 1125:
case 764:
case 2386:
case 3897:
case 2634:
case 879:
case 2446:
case 2033:
case 2636:
case 3577:
case 2706:
case 2768:
case 835:
case 2925:
case 1067:
case 1510:
case 1532:
case 40:
case 176:
case 3344:
case 3486:
case 1478:
case 493:
case 946:
case 3484:
case 276:
case 1704:
case 977:
case 430:
case 2067:
case 384:
case 1622:
case 2923:
case 3692:
case 610:
case 1219:
case 2622:
case 3993:
case 3054:
case 420:
case 3848:
case 3460:
case 762:
case 2424:
case 2070:
case 2145:
case 1847:
case 1070:
case 1424:
case 1754:
case 3605:
case 80:
case 2469:
case 1145:
case 3332:
case 615:
case 306:
case 3902:
case 3767:
case 2143:
case 753:
case 886:
case 820:
case 2544:
case 1546:
case 3911:
case 1544:
case 3006:
case 3519:
case 1143:
case 333:
case 3315:
case 2073:
case 3062:
case 1659:
case 3281:
case 390:
case 3929:
case 2674:
case 747:
case 776:
case 368:
case 2871:
case 2659:
case 861:
case 1676:
case 2999:
case 3908:
case 4042:
case 960:
case 3313:
case 3215:
case 1697:
case 2075:
case 3381:
case 3631:
case 3627:
case 3834:
case 2957:
case 3980:
case 1075:
case 3600:
case 3836:
case 518:
case 1140:
case 162:
case 817:
case 1116:
case 3149:
case 1221:
case 1513:
case 1237:
case 1114:
case 999:
case 2989:
case 2116:
case 3698:
case 262:
case 2581:
case 3775:
case 3465:
case 3391:
case 1687:
case 4036:
case 2920:
case 1472:
case 1515:
case 1337:
case 1907:
case 3650:
case 2687:
case 1538:
case 671:
case 3773:
case 519:
case 2472:
case 2337:
case 253:
case 2321:
case 1920:
case 2491:
case 3190:
case 565:
case 1805:
case 2107:
case 599:
case 68:
case 26:
case 1491:
case 757:
case 2120:
case 789:
case 3421:
case 3751:
case 2363:
case 8:
case 3372:
case 1803:
case 1030:
case 1012:
case 2001:
case 4022:
case 1739:
case 1916:
case 2012:
case 2030:
case 315:
case 2803:
case 2263:
case 3272:
case 2157:
case 3565:
case 3712:
case 598:
case 701:
case 1940:
case 1481:
case 2855:
case 1413:
case 1157:
case 2940:
case 1341:
case 3039:
case 2572:
case 3563:
case 243:
case 497:
case 918:
case 2051:
case 1438:
case 3108:
case 1648:
case 2241:
case 2892:
case 1199:
case 164:
case 1572:
case 3129:
case 2648:
case 1780:
case 3846:
case 2101:
case 1130:
case 3400:
case 3248:
case 480:
case 2497:
case 3844:
case 3058:
case 616:
case 2130:
case 3757:
case 1089:
case 270:
case 1474:
case 15:
case 3348:
case 1766:
case 1007:
case 170:
case 2766:
case 1729:
case 334:
case 2476:
case 3066:
case 3008:
case 2347:
case 908:
case 2151:
case 2099:
case 3064:
case 485:
case 1347:
case 2790:
case 3029:
case 2548:
case 711:
case 972:
case 945:
case 275:
case 836:
case 349:
case 3832:
case 3810:
case 441:
case 2975:
case 581:
case 139:
case 3939:
case 2040:
case 3531:
case 3527:
case 2250:
case 3287:
case 1040:
case 791:
case 508:
case 2597:
case 1250:
case 1175:
case 2749:
case 3637:
case 3621:
case 1559:
case 2894:
case 24:
case 97:
case 1691:
case 1951:
case 2559:
case 3228:
case 1350:
case 1896:
case 3824:
case 407:
case 2691:
case 14:
case 950:
case 1227:
case 2638:
case 1231:
case 683:
case 138:
case 3297:
case 163:
case 1448:
case 1860:
case 1200:
case 1638:
case 1388:
case 974:
case 2615:
case 1014:
case 2912:
case 1901:
case 2300:
case 128:
case 4024:
case 451:
case 3397:
case 359:
case 807:
case 4026:
case 3259:
case 1509:
case 1300:
case 228:
case 1884:
case 3598:
case 2014:
case 2327:
case 1288:
case 2509:
case 3878:
case 2681:
case 3276:
case 1528:
case 2016:
case 1522:
case 814:
case 739:
case 3872:
case 2863:
case 2305:
case 600:
case 1918:
case 1863:
case 1203:
case 3553:
case 1935:
case 191:
case 3154:
case 2522:
case 3745:
case 2933:
case 2865:
case 2205:
case 1382:
case 1167:
case 649:
case 1610:
case 1632:
case 1865:
case 1303:
case 2382:
case 1933:
case 74:
case 2610:
case 3743:
case 892:
case 2436:
case 1292:
case 624:
case 2043:
case 3222:
case 316:
case 2253:
case 3582:
case 3106:
case 2292:
case 1436:
case 1253:
case 1355:
case 1644:
case 4072:
case 1434:
case 752:
case 2045:
case 2255:
case 648:
case 81:
case 2392:
case 3505:
case 566:
case 1255:
case 1170:
case 3236:
case 1793:
case 3838:
case 3723:
case 2793:
case 3815:
case 383:
case 1752:
case 1422:
case 3968:
case 4091:
case 1795:
case 2542:
case 2271:
case 3334:
case 3686:
case 3455:
case 3725:
case 3083:
case 1542:
case 2795:
case 770:
case 3002:
case 687:
case 1025:
case 2967:
case 1783:
case 4015:
case 1133:
case 754:
case 2711:
case 632:
case 4038:
case 1023:
case 412:
case 3694:
case 4081:
case 1135:
case 111:
case 2821:
case 3405:
case 2837:
case 3093:
case 1624:
case 1837:
case 211:
case 3052:
case 622:
case 1669:
case 3571:
case 775:
case 742:
case 575:
case 3258:
case 2289:
case 1320:
case 2937:
case 2307:
case 3048:
case 406:
case 3879:
case 3651:
case 4068:
case 2566:
case 1529:
case 4006:
case 3747:
case 27:
case 94:
case 2564:
case 3290:
case 3358:
case 939:
case 2639:
case 1220:
case 2449:
case 1165:
case 1389:
case 2580:
case 928:
case 3264:
case 952:
case 3630:
case 2141:
case 3612:
case 3440:
case 3981:
case 386:
case 3601:
case 55:
case 4056:
case 1141:
case 30:
case 3364:
case 3280:
case 1870:
case 274:
case 3938:
case 1590:
case 3308:
case 963:
case 88:
case 2047:
case 3507:
case 1257:
case 330:
case 2590:
case 6:
case 3329:
case 378:
case 3499:
case 95:
case 3087:
case 2050:
case 2776:
case 1050:
case 3817:
case 240:
case 970:
case 437:
case 1464:
case 552:
case 1408:
case 3138:
case 1466:
case 528:
case 2429:
case 2098:
case 3514:
case 302:
case 1549:
case 109:
case 3009:
case 2340:
case 2549:
case 544:
case 1340:
case 3097:
case 837:
case 1709:
case 3489:
case 2458:
case 54:
case 2728:
case 1027:
case 1314:
case 4017:
case 145:
case 3349:
case 2833:
case 2709:
case 3675:
case 2316:
case 975:
case 1833:
case 3798:
case 1000:
case 529:
case 2314:
case 1216:
case 2490:
case 2088:
case 1787:
case 1214:
case 108:
case 1137:
case 3407:
case 2835:
case 3249:
case 954:
case 2662:
case 3673:
case 1835:
case 208:
case 539:
case 3750:
case 2495:
case 2986:
case 2604:
case 1261:
case 1801:
case 1082:
case 2830:
case 2606:
case 2812:
case 1604:
case 967:
case 1986:
case 1119:
case 3543:
case 1495:
case 266:
case 3144:
case 1812:
case 1984:
case 1830:
case 1606:
case 410:
case 2261:
case 2801:
case 693:
case 1361:
case 709:
case 2005:
case 630:
case 3670:
case 3423:
case 3753:
case 1960:
case 2361:
case 2996:
case 1851:
case 2485:
case 625:
case 1092:
case 810:
case 2654:
case 604:
case 772:
case 2243:
case 2679:
case 3924:
case 1345:
case 1654:
case 3926:
case 1994:
case 1977:
case 3782:
case 2411:
case 1402:
case 2483:
case 2055:
case 3132:
case 3110:
case 3667:
case 591:
case 2343:
case 1055:
case 3703:
case 1343:
case 1245:
case 3311:
case 3525:
case 2177:
case 3285:
case 2742:
case 77:
case 679:
case 750:
case 2595:
case 2071:
case 2552:
case 3635:
case 3126:
case 1194:
case 2196:
case 2194:
case 3393:
case 1617:
case 567:
case 423:
case 755:
case 613:
case 2160:
case 2585:
case 1186:
case 468:
case 1736:
case 3944:
case 1223:
case 2502:
case 433:
case 1583:
case 3946:
case 895:
case 3042:
case 2736:
case 2919:
case 1502:
case 2583:
case 3252:
case 602:
case 2511:
case 3026:
case 3623:
case 2992:
case 2652:
case 3024:
case 351:
case 1096:
case 3535:
case 1693:
case 2171:
case 1953:
case 1652:
case 858:
case 3069:
case 2094:
case 2953:
case 3922:
case 2693:
case 2096:
case 3786:
case 1840:
case 3136:
case 1406:
case 976:
case 3784:
case 1695:
case 3134:
case 947:
case 1955:
case 2406:
case 798:
case 501:
case 2840:
case 2404:
case 2955:
case 1077:
case 146:
case 2814:
case 2982:
case 1084:
case 2218:
case 1611:
case 3078:
case 2816:
case 1683:
case 2084:
case 1982:
case 612:
case 2235:
case 307:
case 2683:
case 1816:
case 2611:
case 131:
case 1905:
case 1724:
case 2318:
case 2479:
case 1456:
case 3794:
case 765:
case 2454:
case 2335:
case 799:
case 603:
case 1769:
case 2685:
case 2456:
case 1479:
case 1267:
case 1807:
case 2105:
case 2820:
case 834:
case 3418:
case 848:
case 3354:
case 61:
case 3645:
case 3570:
case 341:
case 3435:
case 449:
case 3890:
case 156:
case 385:
case 2103:
case 692:
case 4064:
case 43:
case 1710:
case 1732:
case 2504:
case 2019:
case 3279:
case 1889:
case 4066:
case 2506:
case 2732:
case 2710:
case 3046:
case 3643:
case 400:
case 2182:
case 2367:
case 4029:
case 989:
case 2889:
case 3858:
case 2744:
case 718:
case 2746:
case 3032:
case 1857:
case 2270:
case 3567:
case 3719:
case 3304:
case 3880:
case 448:
case 1155:
case 1746:
case 3661:
case 614:
case 4058:
case 2556:
case 1192:
case 2153:
case 2417:
case 1971:
case 2370:
case 901:
case 1556:
case 547:
case 83:
case 424:
case 3808:
case 2899:
case 1370:
case 1153:
case 405:
case 1439:
case 3109:
case 3614:
case 119:
case 1649:
case 607:
case 3013:
case 2375:
case 2273:
case 3616:
case 312:
case 2198:
case 553:
case 1198:
case 1375:
case 756:
case 4095:
case 883:
case 1947:
case 2150:
case 2373:
case 2275:
case 3362:
case 3451:
case 3721:
case 2947:
case 1275:
case 39:
case 1150:
case 1021:
case 1562:
case 1037:
case 2823:
case 1715:
case 2188:
case 394:
case 943:
case 2715:
case 3174:
case 218:
case 964:
case 4002:
case 2562:
case 1738:
case 3893:
case 1781:
case 2100:
case 2127:
case 2713:
case 2131:
case 1825:
case 1100:
case 3895:
case 1065:
case 2931:
case 1330:
case 564:
case 1680:
case 1301:
case 2312:
case 1931:
case 636:
case 1927:
case 3657:
case 1539:
case 3741:
case 416:
case 3148:
case 1212:
case 2201:
case 1664:
case 2608:
case 1861:
case 1629:
case 680:
case 626:
case 2230:
case 2063:
case 3959:
case 314:
case 3699:
case 2147:
case 2462:
case 3473:
case 641:
case 1690:
case 2772:
case 1950:
case 2351:
case 3607:
case 1147:
case 3987:
case 1462:
case 3928:
case 731:
case 299:
case 265:
case 3512:
case 1658:
case 3765:
case 165:
case 3909:
case 1251:
case 3501:
case 56:
case 2658:
case 392:
case 2338:
case 3591:
case 2964:
case 1213:
case 1537:
case 1521:
case 190:
case 1908:
case 2929:
case 2281:
case 290:
case 2062:
case 3073:
case 601:
case 2537:
case 2213:
case 3676:
case 2238:
case 1441:
case 2836:
case 2600:
case 2980:
case 1238:
case 1980:
case 594:
case 3075:
case 1149:
case 169:
case 3221:
case 657:
case 3513:
case 2775:
case 3581:
case 195:
case 3609:
case 1842:
case 1291:
case 59:
case 2958:
case 689:
case 3116:
case 4071:
case 295:
case 1775:
case 269:
case 2149:
case 503:
case 78:
case 1698:
case 353:
case 2463:
case 91:
case 3472:
case 2990:
case 1391:
case 3687:
case 1463:
case 3920:
case 1650:
case 2391:
case 2437:
case 2372:
case 3805:
case 3265:
case 2647:
case 36:
case 592:
case 3107:
case 3491:
case 3803:
case 3365:
case 3263:
case 3030:
case 215:
case 3012:
case 1158:
case 2541:
case 771:
case 4053:
case 866:
case 3739:
case 51:
case 3940:
case 1180:
case 1565:
case 514:
case 1730:
case 727:
case 3481:
case 2730:
case 3413:
case 994:
case 1108:
case 3648:
case 2129:
case 4082:
case 2822:
case 2166:
case 1129:
case 3241:
case 737:
case 3051:
case 364:
case 1822:
case 2164:
case 343:
case 3572:
case 1226:
case 1828:
case 1586:
case 2102:
case 1183:
case 1111:
case 2586:
case 2226:
case 662:
case 3642:
case 182:
case 2111:
case 2584:
case 357:
case 3410:
case 3377:
case 809:
case 1102:
case 2224:
case 3394:
case 1326:
case 507:
case 3945:
case 1324:
case 472:
case 3396:
case 445:
case 171:
case 4027:
case 840:
case 1718:
case 2735:
case 2560:
case 3277:
case 3360:
case 227:
case 301:
case 3035:
case 2152:
case 1874:
case 3717:
case 3526:
case 881:
case 1876:
case 2874:
case 2596:
case 127:
case 388:
case 2193:
case 2876:
case 2278:
case 1859:
case 2594:
case 3018:
case 3260:
case 2577:
case 440:
case 3446:
case 1378:
case 2897:
case 3386:
case 3827:
case 4050:
case 1577:
case 2195:
case 845:
case 2419:
case 3510:
case 347:
case 2484:
case 2346:
case 2995:
case 733:
case 2655:
case 2486:
case 2344:
case 790:
case 1346:
case 1344:
case 526:
case 4047:
case 3706:
case 3478:
case 1995:
case 1692:
case 643:
case 1952:
case 2770:
case 2054:
case 2246:
case 664:
case 3622:
case 184:
case 723:
case 1079:
case 2653:
case 850:
case 2056:
case 1246:
case 1848:
case 455:
case 2692:
case 1056:
case 87:
case 1653:
case 2079:
case 1993:
case 769:
case 3469:
case 2494:
case 3779:
case 2605:
case 874:
case 1232:
case 1494:
case 3756:
case 1985:
case 18:
case 3424:
case 2232:
case 3754:
case 2068:
case 2519:
case 2006:
case 855:
case 541:
case 2603:
case 1310:
case 1477:
case 1767:
case 1603:
case 3544:
case 1519:
case 1068:
case 3143:
case 1004:
case 206:
case 2477:
case 2332:
case 450:
case 1911:
case 2310:
case 3918:
case 2745:
case 1179:
case 654:
case 3522:
case 2154:
case 1872:
case 1745:
case 3203:
case 3863:
case 3305:
case 2872:
case 3935:
case 391:
case 1154:
case 2743:
case 3442:
case 758:
case 642:
case 1743:
case 3303:
case 1555:
case 899:
case 2104:
case 2619:
case 116:
case 1582:
case 2503:
case 2106:
case 2168:
case 1503:
case 3253:
case 5:
case 1619:
case 917:
case 2222:
case 3434:
case 3043:
case 460:
case 3436:
case 759:
case 670:
case 1471:
case 2917:
case 1322:
case 4065:
case 3392:
case 1505:
case 2761:
case 3255:
case 3170:
case 2471:
case 1234:
case 3970:
case 1453:
case 1117:
case 1723:
case 1085:
case 2492:
case 9:
case 1838:
case 2117:
case 2453:
case 724:
case 1815:
case 2234:
case 3752:
case 3422:
case 644:
case 705:
case 1011:
case 296:
case 473:
case 1334:
case 1904:
case 2002:
case 1336:
case 1906:
case 1684:
case 1813:
case 2686:
case 628:
case 2334:
case 1881:
case 652:
case 2011:
case 3542:
case 2906:
case 2336:
case 1095:
case 3783:
case 3133:
case 2482:
case 1403:
case 639:
case 1482:
case 3702:
case 3967:
case 419:
case 2979:
case 1696:
case 2242:
case 2891:
case 3785:
case 1694:
case 3626:
case 3118:
case 1891:
case 2696:
case 1979:
case 818:
case 2093:
case 3837:
case 2405:
case 3669:
case 749:
case 1571:
case 224:
case 3819:
case 3780:
case 2757:
case 2431:
case 3112:
case 2641:
case 902:
case 124:
case 2844:
case 3497:
case 2248:
case 1641:
case 1427:
case 3101:
case 2846:
case 1431:
case 1757:
case 3476:
case 586:
case 520:
case 1090:
case 2547:
case 978:
case 248:
case 3764:
case 1348:
case 3729:
case 3459:
case 134:
case 2488:
case 796:
case 1799:
case 3007:
case 1064:
case 13:
case 2707:
case 1450:
case 1066:
case 2029:
case 535:
case 2720:
case 3487:
case 1962:
case 2064:
case 3347:
case 2008:
case 4019:
case 2663:
case 1029:
case 3975:
case 1498:
case 504:
case 2810:
case 1080:
case 2080:
case 3057:
case 1832:
case 1810:
case 2498:
case 22:
case 1789:
case 1531:
case 1527:
case 4060:
case 1714:
case 431:
case 1287:
case 1939:
case 877:
case 2287:
case 1500:
case 3175:
case 232:
case 2527:
case 935:
case 3398:
case 3040:
case 2716:
case 2939:
case 1328:
case 3691:
case 2824:
case 158:
case 421:
case 2228:
case 1637:
case 4086:
case 1209:
case 2826:
case 3350:
case 3896:
case 611:
case 1824:
case 2162:
case 579:
case 925:
case 3574:
case 2209:
case 1588:
case 1826:
case 2447:
case 2637:
case 904:
case 363:
case 2376:
case 716:
case 344:
case 3227:
case 2374:
case 3587:
case 3388:
case 2359:
case 1376:
case 2297:
case 831:
case 1550:
case 446:
case 3448:
case 993:
case 3200:
case 930:
case 1374:
case 3638:
case 1397:
case 3613:
case 2276:
case 667:
case 3681:
case 4094:
case 2878:
case 1259:
case 352:
case 2274:
case 3901:
case 328:
case 187:
case 1049:
case 3288:
case 1276:
case 3886:
case 3528:
case 259:
case 2397:
case 1740:
case 513:
case 2049:
case 3912:
case 1598:
case 920:
case 1274:
case 986:
case 2755:
case 3082:
case 655:
case 366:
case 2543:
case 3812:
case 3003:
case 464:
case 1146:
case 297:
case 1755:
case 3604:
case 3986:
case 3495:
case 1978:
case 3722:
case 2670:
case 674:
case 702:
case 1792:
case 2545:
case 1423:
case 86:
case 983:
case 2792:
case 3493:
case 516:
case 2:
case 2926:
case 1969:
case 864:
case 2924:
case 1561:
case 779:
case 4030:
case 3654:
case 3485:
case 1705:
case 4001:
case 1667:
case 46:
case 3977:
case 1132:
case 1110:
case 3245:
case 2839:
case 2132:
case 3055:
case 3483:
case 1633:
case 2932:
case 1525:
case 3875:
case 1285:
case 2302:
case 2443:
case 3742:
case 2036:
case 2383:
case 1302:
case 3177:
case 2034:
case 1932:
case 2311:
case 161:
case 1635:
case 3593:
case 462:
case 2169:
case 1126:
case 3194:
case 1211:
case 1124:
case 1385:
case 1169:
case 2126:
case 2635:
case 261:
case 1202:
case 3552:
case 1618:
case 2523:
case 2211:
case 3225:
case 2461:
case 2352:
case 3585:
case 3160:
case 1393:
case 1295:
case 3617:
case 596:
case 4075:
case 1771:
case 1461:
case 786:
case 853:
case 2295:
case 916:
case 3511:
case 3583:
case 1395:
case 1293:
case 3186:
case 3736:
case 2042:
case 1178:
case 1944:
case 3502:
case 862:
case 2944:
case 2178:
case 2395:
case 2599:
case 225:
case 3163:
case 2172:
case 1048:
case 549:
case 922:
case 1390:
case 2991:
case 2747:
case 3566:
case 2651:
case 2879:
case 1172:
case 125:
case 3307:
case 350:
case 1599:
case 3289:
case 52:
case 2856:
case 3529:
case 1747:
case 761:
case 2414:
case 500:
case 135:
case 3867:
case 3449:
case 1557:
case 3389:
case 53:
case 2358:
case 1416:
case 2290:
case 847:
case 2229:
case 1266:
case 1208:
case 1868:
case 959:
case 1440:
case 2601:
case 1804:
case 1264:
case 220:
case 286:
case 2208:
case 2868:
case 2440:
case 1229:
case 666:
case 2266:
case 355:
case 1981:
case 2380:
case 2804:
case 2264:
case 1938:
case 293:
case 10:
case 3748:
case 524:
case 1280:
case 2507:
case 447:
case 2308:
case 2938:
case 1507:
case 2280:
case 2520:
case 1915:
case 2364:
case 3399:
case 193:
case 1499:
case 113:
case 1087:
case 3240:
case 3776:
case 3466:
case 1788:
case 934:
case 213:
case 3774:
case 2499:
case 948:
case 2028:
case 1516:
case 3797:
case 1514:
case 889:
case 1727:
case 4035:
case 2727:
case 3480:
case 2457:
case 488:
case 2731:
case 2514:
case 2181:
case 905:
case 3031:
case 372:
case 2798:
case 345:
case 1349:
case 3316:
case 1097:
case 3709:
case 2540:
case 3833:
case 1798:
case 3728:
case 1540:
case 2097:
case 1972:
case 3787:
case 2074:
case 308:
case 1407:
case 3121:
case 1249:
case 3216:
case 3662:
case 3818:
case 1191:
case 1059:
case 2249:
case 2407:
case 381:
case 3963:
case 1750:
case 2972:
case 2059:
case 1076:
case 3490:
case 801:
case 411:
case 867:
case 1013:
case 1802:
case 2883:
case 2811:
case 4023:
case 1081:
case 3439:
case 1109:
case 319:
case 212:
case 1883:
case 2616:
case 3273:
case 621:
case 1128:
case 2614:
case 2109:
case 741:
case 103:
case 29:
case 1362:
case 2885:
case 1451:
case 3947:
case 2737:
case 2451:
case 2362:
case 3275:
case 2187:
case 3150:
case 569:
case 1038:
case 1091:
case 2893:
case 194:
case 2176:
case 2573:
case 3037:
case 373:
case 2948:
case 811:
case 467:
case 294:
case 2091:
case 910:
case 1174:
case 726:
case 2412:
case 646:
case 2640:
case 677:
case 3713:
case 1401:
case 1895:
case 590:
case 2401:
case 3825:
case 1430:
case 751:
case 3680:
case 510:
case 3065:
case 3900:
case 1657:
case 4045:
case 3539:
case 1741:
case 3301:
case 3931:
case 3927:
case 891:
case 968:
case 214:
case 2959:
case 3063:
case 1974:
case 114:
case 1551:
case 3861:
case 3629:
case 2974:
case 2148:
case 3690:
case 11:
case 2239:
case 1620:
case 2607:
case 1987:
case 2473:
case 3462:
case 1607:
case 1239:
case 2620:
case 3147:
case 707:
case 1512:
case 1475:
case 292:
case 3658:
case 969:
case 4061:
case 2339:
case 3843:
case 2909:
case 1501:
case 1689:
case 192:
case 2530:
case 3041:
case 399:
case 2928:
case 151:
case 1470:
case 1535:
case 452:
case 4014:
case 3094:
case 1623:
case 2518:
case 537:
case 3171:
case 1922:
case 251:
case 2470:
case 2024:
case 2623:
case 1069:
case 1784:
case 1533:
case 1217:
case 3695:
case 3955:
case 1786:
case 444:
case 3468:
case 1625:
case 3840:
case 3778:
case 1136:
case 3406:
case 2134:
case 3077:
case 2784:
case 2533:
case 839:
case 2786:
case 2142:
case 3683:
case 71:
case 321:
case 3333:
case 2849:
case 906:
case 3084:
case 619:
case 3816:
case 3814:
case 3982:
case 1849:
case 582:
case 3456:
case 3685:
case 3726:
case 3060:
case 3335:
case 3517:
case 3905:
case 1796:
case 3318:
case 2796:
case 98:
case 863:
case 870:
case 1418:
case 2890:
case 971:
case 2435:
case 241:
case 2354:
case 1356:
case 506:
case 1890:
case 1354:
case 1645:
case 141:
case 2858:
case 58:
case 1942:
case 665:
case 2433:
case 3367:
case 3182:
case 2643:
case 3568:
case 2279:
case 1643:
case 982:
case 1010:
case 1032:
case 2880:
case 1567:
case 2304:
case 2368:
case 842:
case 2306:
case 2719:
case 1304:
case 937:
case 470:
case 3270:
case 236:
case 1880:
case 1719:
case 1306:
case 3744:
case 1368:
case 180:
case 126:
case 3971:
case 3899:
case 698:
case 854:
case 1122:
case 2864:
case 3579:
case 1661:
case 1864:
case 1204:
case 226:
case 280:
case 3153:
case 1866:
case 1206:
case 2829:
case 2661:
case 1268:
case 1808:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743973201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,];
var gg_b = "1743973201/";

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
