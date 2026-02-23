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
case 931:
case 3660:
case 3525:
case 2928:
case 3608:
case 845:
case 559:
case 3229:
case 2874:
case 1584:
case 346:
case 3509:
case 115:
case 617:
case 2950:
case 2539:
case 3793:
case 1097:
case 2823:
case 3165:
case 634:
case 2367:
case 1056:
case 1754:
case 2987:
case 3205:
case 1216:
case 2675:
case 74:
case 4033:
case 495:
case 2989:
case 3196:
case 3292:
case 611:
case 3180:
case 2615:
case 2537:
case 1276:
case 283:
case 3700:
case 1172:
case 38:
case 309:
case 3884:
case 164:
case 3507:
case 2846:
case 2110:
case 541:
case 3227:
case 2891:
case 3721:
case 191:
case 3371:
case 3919:
case 2945:
case 2001:
case 2814:
case 3977:
case 2058:
case 1825:
case 1440:
case 914:
case 602:
case 2302:
case 2990:
case 2366:
case 2421:
case 1711:
case 3332:
case 2986:
case 3199:
case 1217:
case 1639:
case 327:
case 1080:
case 1862:
case 2849:
case 3815:
case 1806:
case 260:
case 711:
case 2684:
case 3646:
case 1096:
case 1279:
case 3916:
case 1538:
case 1393:
case 3691:
case 486:
case 857:
case 4017:
case 2400:
case 3354:
case 2851:
case 851:
case 2082:
case 1988:
case 228:
case 1992:
case 1300:
case 2164:
case 3122:
case 795:
case 2204:
case 1771:
case 734:
case 2847:
case 686:
case 3252:
case 1321:
case 3623:
case 1883:
case 1219:
case 3197:
case 2395:
case 1059:
case 2903:
case 3875:
case 305:
case 151:
case 2692:
case 747:
case 3069:
case 3055:
case 3320:
case 2249:
case 1552:
case 1206:
case 1798:
case 2688:
case 3577:
case 3456:
case 239:
case 1102:
case 759:
case 2627:
case 3843:
case 93:
case 455:
case 3422:
case 1603:
case 4006:
case 2937:
case 3907:
case 3130:
case 2260:
case 3909:
case 54:
case 819:
case 2011:
case 2550:
case 2251:
case 3834:
case 3826:
case 3678:
case 2796:
case 3238:
case 3040:
case 2629:
case 1690:
case 3579:
case 1877:
case 3925:
case 61:
case 2528:
case 908:
case 3852:
case 3499:
case 3067:
case 1819:
case 1763:
case 2121:
case 2605:
case 3275:
case 1140:
case 459:
case 3382:
case 3441:
case 4007:
case 1915:
case 368:
case 2634:
case 2153:
case 2274:
case 1248:
case 3398:
case 2410:
case 1030:
case 511:
case 1689:
case 3533:
case 1720:
case 2799:
case 1701:
case 2223:
case 573:
case 1588:
case 1167:
case 710:
case 1592:
case 3095:
case 1758:
case 1181:
case 2835:
case 3496:
case 4048:
case 1816:
case 1505:
case 3002:
case 2032:
case 659:
case 3892:
case 1155:
case 897:
case 3459:
case 1169:
case 1876:
case 1628:
case 320:
case 145:
case 32:
case 647:
case 316:
case 4025:
case 85:
case 1687:
case 2590:
case 2291:
case 2643:
case 2586:
case 2470:
case 1661:
case 3363:
case 4009:
case 1310:
case 2818:
case 4027:
case 701:
case 1196:
case 1768:
case 3342:
case 3099:
case 2606:
case 180:
case 1157:
case 1288:
case 868:
case 3624:
case 1884:
case 364:
case 3809:
case 1507:
case 50:
case 2574:
case 1227:
case 3233:
case 391:
case 2411:
case 500:
case 774:
case 1919:
case 2494:
case 1977:
case 1685:
case 429:
case 1979:
case 2198:
case 3022:
case 3613:
case 3732:
case 3353:
case 1311:
case 1525:
case 397:
case 2471:
case 2766:
case 2702:
case 820:
case 322:
case 1608:
case 3244:
case 2286:
case 82:
case 4005:
case 2182:
case 3848:
case 3584:
case 2546:
case 3807:
case 253:
case 2683:
case 2837:
case 1793:
case 707:
case 1647:
case 3097:
case 852:
case 350:
case 538:
case 629:
case 1165:
case 3455:
case 3056:
case 3216:
case 1205:
case 4029:
case 3943:
case 2585:
case 4052:
case 1976:
case 887:
case 3992:
case 1226:
case 2648:
case 7:
case 1674:
case 456:
case 2330:
case 401:
case 3771:
case 1156:
case 2607:
case 3466:
case 1506:
case 1623:
case 412:
case 932:
case 3065:
case 474:
case 4026:
case 3927:
case 1875:
case 121:
case 319:
case 3929:
case 4043:
case 3575:
case 3711:
case 1753:
case 1583:
case 127:
case 625:
case 3862:
case 2740:
case 3806:
case 2547:
case 2228:
case 284:
case 1646:
case 3279:
case 2836:
case 3538:
case 3393:
case 3041:
case 2935:
case 2873:
case 407:
case 2101:
case 1614:
case 2261:
case 3131:
case 2767:
case 2551:
case 913:
case 1430:
case 433:
case 2625:
case 943:
case 501:
case 525:
case 1909:
case 3431:
case 2772:
case 892:
case 262:
case 1834:
case 1678:
case 3686:
case 2644:
case 827:
case 2458:
case 485:
case 1040:
case 3690:
case 789:
case 70:
case 357:
case 3283:
case 574:
case 3195:
case 2397:
case 1499:
case 1635:
case 2420:
case 1517:
case 3763:
case 4038:
case 181:
case 349:
case 1948:
case 306:
case 2974:
case 351:
case 3782:
case 1069:
case 1497:
case 1055:
case 442:
case 1320:
case 3206:
case 1215:
case 3552:
case 2132:
case 3798:
case 3166:
case 1456:
case 1770:
case 533:
case 796:
case 1843:
case 2712:
case 2504:
case 2887:
case 2633:
case 2154:
case 3603:
case 3534:
case 275:
case 1907:
case 3938:
case 1002:
case 2908:
case 2357:
case 1892:
case 3155:
case 2617:
case 2380:
case 2239:
case 3169:
case 3209:
case 2396:
case 1284:
case 2960:
case 5:
case 116:
case 529:
case 3833:
case 3687:
case 3529:
case 1827:
case 2578:
case 1544:
case 2947:
case 696:
case 400:
case 2171:
case 3661:
case 4084:
case 2518:
case 2949:
case 2000:
case 880:
case 1829:
case 3527:
case 809:
case 2463:
case 3248:
case 3030:
case 3689:
case 2677:
case 2985:
case 3207:
case 2731:
case 2021:
case 2237:
case 3167:
case 2365:
case 60:
case 2359:
case 2619:
case 3181:
case 3758:
case 689:
case 1496:
case 3973:
case 518:
case 3835:
case 2496:
case 335:
case 2805:
case 1677:
case 570:
case 1985:
case 3652:
case 3312:
case 1237:
case 1365:
case 179:
case 1886:
case 3878:
case 1000:
case 3626:
case 2398:
case 2829:
case 3153:
case 1111:
case 2533:
case 3799:
case 3410:
case 1518:
case 394:
case 836:
case 1949:
case 2906:
case 898:
case 4037:
case 3470:
case 3214:
case 1171:
case 1498:
case 566:
case 853:
case 3590:
case 1341:
case 2827:
case 732:
case 3586:
case 1578:
case 448:
case 1380:
case 2284:
case 1960:
case 1396:
case 216:
case 9:
case 3913:
case 3722:
case 1923:
case 3937:
case 1850:
case 3193:
case 2618:
case 3285:
case 2843:
case 3765:
case 3627:
case 413:
case 1887:
case 1633:
case 1504:
case 3464:
case 1273:
case 907:
case 2320:
case 2215:
case 2055:
case 287:
case 1236:
case 2770:
case 3545:
case 3692:
case 2497:
case 2635:
case 432:
case 604:
case 2710:
case 1845:
case 2517:
case 1356:
case 1616:
case 3605:
case 1991:
case 477:
case 4013:
case 3741:
case 2081:
case 2852:
case 1397:
case 162:
case 3208:
case 1644:
case 388:
case 3796:
case 3587:
case 1889:
case 2238:
case 3168:
case 1458:
case 671:
case 3780:
case 884:
case 3629:
case 925:
case 2909:
case 1946:
case 901:
case 2130:
case 543:
case 1213:
case 3550:
case 956:
case 3011:
case 1772:
case 748:
case 1401:
case 1101:
case 2354:
case 718:
case 3400:
case 3885:
case 1010:
case 1767:
case 504:
case 770:
case 2691:
case 1935:
case 1873:
case 1740:
case 643:
case 2583:
case 360:
case 862:
case 3849:
case 1547:
case 2646:
case 4050:
case 1824:
case 1836:
case 4087:
case 3302:
case 3366:
case 3986:
case 942:
case 1978:
case 3395:
case 1245:
case 2197:
case 875:
case 3903:
case 2875:
case 205:
case 4089:
case 3536:
case 3524:
case 354:
case 1549:
case 2252:
case 3847:
case 2506:
case 858:
case 2562:
case 3573:
case 1070:
case 328:
case 1454:
case 3164:
case 2234:
case 2674:
case 824:
case 1648:
case 3098:
case 2122:
case 1330:
case 443:
case 3204:
case 2838:
case 1813:
case 1769:
case 2742:
case 985:
case 1585:
case 2165:
case 3235:
case 3987:
case 4090:
case 2509:
case 3961:
case 996:
case 3539:
case 1683:
case 1837:
case 2793:
case 3823:
case 2608:
case 2917:
case 3278:
case 2394:
case 1182:
case 2311:
case 1198:
case 3170:
case 3928:
case 1494:
case 3058:
case 3218:
case 67:
case 2685:
case 1574:
case 2227:
case 618:
case 90:
case 2548:
case 3453:
case 1411:
case 2721:
case 1163:
case 2919:
case 900:
case 1203:
case 3001:
case 1523:
case 280:
case 3730:
case 3355:
case 1606:
case 2649:
case 879:
case 1662:
case 2288:
case 28:
case 2700:
case 2507:
case 743:
case 1904:
case 2768:
case 4003:
case 3369:
case 437:
case 1470:
case 1214:
case 3947:
case 1054:
case 3498:
case 4046:
case 472:
case 1818:
case 934:
case 414:
case 3093:
case 2975:
case 1590:
case 1291:
case 3803:
case 2169:
case 631:
case 2628:
case 1142:
case 4014:
case 3960:
case 245:
case 3951:
case 2505:
case 1722:
case 3908:
case 3535:
case 2155:
case 3619:
case 672:
case 3359:
case 2592:
case 2181:
case 135:
case 2816:
case 3677:
case 3985:
case 3021:
case 3731:
case 1223:
case 1312:
case 2588:
case 3365:
case 2370:
case 379:
case 3886:
case 1626:
case 1634:
case 3000:
case 3463:
case 2248:
case 3111:
case 2720:
case 465:
case 1410:
case 911:
case 2030:
case 883:
case 1924:
case 2140:
case 544:
case 3068:
case 194:
case 4023:
case 3194:
case 3949:
case 2915:
case 669:
case 1121:
case 3845:
case 999:
case 714:
case 3616:
case 249:
case 3991:
case 1741:
case 737:
case 1247:
case 2195:
case 1528:
case 860:
case 362:
case 1208:
case 3644:
case 188:
case 1094:
case 1796:
case 2686:
case 1168:
case 3889:
case 1804:
case 2543:
case 94:
case 1757:
case 1550:
case 3322:
case 29:
case 3053:
case 2431:
case 3772:
case 1939:
case 290:
case 4047:
case 3923:
case 375:
case 3850:
case 986:
case 1285:
case 469:
case 1765:
case 53:
case 3633:
case 1331:
case 3504:
case 530:
case 358:
case 3273:
case 2603:
case 3399:
case 1249:
case 2552:
case 2206:
case 3676:
case 828:
case 2262:
case 3132:
case 3236:
case 3224:
case 139:
case 206:
case 3974:
case 731:
case 765:
case 63:
case 2059:
case 2219:
case 3245:
case 4004:
case 2771:
case 154:
case 3432:
case 3549:
case 2515:
case 1847:
case 2321:
case 2065:
case 2883:
case 1573:
case 3070:
case 128:
case 3454:
case 2300:
case 3648:
case 3330:
case 1204:
case 3813:
case 1082:
case 1860:
case 1493:
case 2988:
case 3101:
case 910:
case 3560:
case 2131:
case 3261:
case 3625:
case 43:
case 569:
case 3287:
case 2905:
case 2041:
case 3781:
case 2393:
case 1468:
case 3935:
case 888:
case 3740:
case 160:
case 3547:
case 3609:
case 2096:
case 2794:
case 1684:
case 2279:
case 16:
case 1366:
case 1990:
case 3120:
case 1986:
case 2217:
case 3978:
case 2952:
case 2825:
case 2440:
case 514:
case 3795:
case 572:
case 291:
case 3411:
case 3163:
case 1001:
case 3523:
case 1615:
case 1020:
case 644:
case 3662:
case 1537:
case 2624:
case 2636:
case 183:
case 2172:
case 1846:
case 264:
case 336:
case 1989:
case 2342:
case 398:
case 1235:
case 1367:
case 4078:
case 2754:
case 1987:
case 2807:
case 1961:
case 73:
case 25:
case 1381:
case 1539:
case 250:
case 730:
case 2097:
case 3286:
case 1278:
case 823:
case 1638:
case 1340:
case 3290:
case 3591:
case 2732:
case 2613:
case 2022:
case 3198:
case 297:
case 3471:
case 947:
case 3514:
case 1928:
case 3965:
case 2854:
case 2187:
case 2568:
case 464:
case 622:
case 1143:
case 1438:
case 2258:
case 1033:
case 697:
case 3:
case 3027:
case 2500:
case 967:
case 2707:
case 1373:
case 2748:
case 3349:
case 1299:
case 2315:
case 2521:
case 329:
case 134:
case 1475:
case 1324:
case 2669:
case 615:
case 3483:
case 65:
case 2970:
case 2128:
case 1152:
case 3895:
case 3462:
case 422:
case 664:
case 2667:
case 3406:
case 1566:
case 3177:
case 2375:
case 994:
case 1502:
case 719:
case 1256:
case 3005:
case 2910:
case 4022:
case 3119:
case 582:
case 497:
case 2681:
case 3694:
case 3957:
case 1746:
case 2078:
case 2709:
case 173:
case 102:
case 3308:
case 3739:
case 3029:
case 2640:
case 1972:
case 841:
case 1313:
case 1222:
case 1653:
case 935:
case 450:
case 1126:
case 2473:
case 1259:
case 2542:
case 301:
case 1931:
case 1484:
case 356:
case 3409:
case 3116:
case 3773:
case 1077:
case 1337:
case 1265:
case 3052:
case 3323:
case 1555:
case 3212:
case 4059:
case 208:
case 2894:
case 374:
case 2706:
case 791:
case 2298:
case 3840:
case 3374:
case 199:
case 2282:
case 826:
case 855:
case 549:
case 2811:
case 810:
case 4065:
case 3144:
case 2186:
case 3999:
case 3997:
case 2553:
case 1127:
case 2263:
case 551:
case 2783:
case 1693:
case 1747:
case 419:
case 4057:
case 2871:
case 722:
case 1192:
case 3855:
case 307:
case 1581:
case 2964:
case 1280:
case 333:
case 1708:
case 1079:
case 3922:
case 1296:
case 186:
case 1760:
case 3713:
case 1567:
case 3632:
case 3761:
case 3557:
case 3267:
case 2993:
case 1572:
case 385:
case 49:
case 490:
case 928:
case 3787:
case 1386:
case 3378:
case 2008:
case 2779:
case 2329:
case 3541:
case 2898:
case 3728:
case 1902:
case 2510:
case 2211:
case 3148:
case 886:
case 1427:
case 457:
case 2486:
case 3444:
case 342:
case 519:
case 3745:
case 2863:
case 2085:
case 2719:
case 2631:
case 451:
case 406:
case 3125:
case 1841:
case 2327:
case 96:
case 1303:
case 1995:
case 2570:
case 960:
case 2271:
case 3565:
case 1704:
case 3789:
case 1006:
case 2968:
case 1405:
case 3109:
case 1184:
case 3930:
case 899:
case 3872:
case 2139:
case 110:
case 790:
case 1426:
case 1981:
case 1025:
case 79:
case 1735:
case 3522:
case 1361:
case 3663:
case 811:
case 2343:
case 564:
case 3831:
case 1387:
case 2801:
case 300:
case 1328:
case 2820:
case 237:
case 3419:
case 2445:
case 1778:
case 2046:
case 3084:
case 2124:
case 3266:
case 1940:
case 3477:
case 3162:
case 1452:
case 597:
case 1718:
case 482:
case 3183:
case 645:
case 3295:
case 1345:
case 3479:
case 265:
case 231:
case 1856:
case 706:
case 1007:
case 3703:
case 3417:
case 2612:
case 2023:
case 1897:
case 2733:
case 1969:
case 2326:
case 2942:
case 1670:
case 2450:
case 1389:
case 396:
case 834:
case 2113:
case 3698:
case 3682:
case 817:
case 1462:
case 609:
case 3566:
case 3714:
case 3256:
case 3502:
case 311:
case 2963:
case 1347:
case 568:
case 979:
case 2383:
case 3791:
case 1957:
case 2086:
case 3746:
case 800:
case 27:
case 302:
case 2485:
case 2090:
case 3972:
case 270:
case 3313:
case 1611:
case 2868:
case 2104:
case 2554:
case 3134:
case 3126:
case 1965:
case 2408:
case 1385:
case 409:
case 2451:
case 1530:
case 2893:
case 1:
case 516:
case 520:
case 3373:
case 1088:
case 3774:
case 1349:
case 3299:
case 2982:
case 896:
case 3336:
case 4031:
case 1802:
case 266:
case 1866:
case 2998:
case 317:
case 3595:
case 1092:
case 1314:
case 1997:
case 427:
case 2775:
case 2050:
case 3127:
case 463:
case 1448:
case 2474:
case 2061:
case 2118:
case 3540:
case 2087:
case 924:
case 2594:
case 2028:
case 958:
case 3339:
case 3280:
case 133:
case 3708:
case 1922:
case 746:
case 2309:
case 3296:
case 1346:
case 1272:
case 975:
case 3017:
case 3567:
case 1713:
case 1632:
case 2423:
case 3569:
case 842:
case 340:
case 2901:
case 993:
case 1409:
case 1773:
case 1116:
case 2958:
case 1052:
case 1212:
case 3555:
case 1026:
case 3600:
case 1736:
case 2270:
case 405:
case 2089:
case 421:
case 2630:
case 1425:
case 3668:
case 2491:
case 112:
case 2178:
case 592:
case 1444:
case 142:
case 271:
case 4055:
case 3429:
case 2582:
case 856:
case 1658:
case 801:
case 984:
case 2333:
case 2752:
case 1125:
case 3841:
case 3303:
case 2073:
case 768:
case 3880:
case 3062:
case 681:
case 1565:
case 3006:
case 1015:
case 1620:
case 3896:
case 3405:
case 2734:
case 1930:
case 3184:
case 31:
case 326:
case 213:
case 1872:
case 1269:
case 310:
case 3857:
case 812:
case 1761:
case 2123:
case 1557:
case 1476:
case 1750:
case 1267:
case 1075:
case 4040:
case 185:
case 2316:
case 687:
case 2656:
case 716:
case 1812:
case 1281:
case 3492:
case 3083:
case 2743:
case 3386:
case 1378:
case 2870:
case 807:
case 2344:
case 232:
case 3966:
case 481:
case 1728:
case 2418:
case 2253:
case 2174:
case 2013:
case 1148:
case 521:
case 4081:
case 3664:
case 1183:
case 2659:
case 2319:
case 1295:
case 1479:
case 3007:
case 2377:
case 1703:
case 2727:
case 1417:
case 1599:
case 2520:
case 3897:
case 2200:
case 138:
case 3670:
case 3230:
case 3389:
case 829:
case 1698:
case 2788:
case 2792:
case 3138:
case 2558:
case 2108:
case 2864:
case 2705:
case 420:
case 3426:
case 3981:
case 248:
case 3350:
case 42:
case 1522:
case 3361:
case 1663:
case 2641:
case 2293:
case 509:
case 4002:
case 1831:
case 2185:
case 3967:
case 100:
case 3899:
case 1597:
case 2680:
case 1790:
case 2729:
case 1419:
case 2379:
case 10:
case 341:
case 2696:
case 3778:
case 3009:
case 189:
case 3940:
case 1477:
case 781:
case 2994:
case 2149:
case 2317:
case 3115:
case 3124:
case 2477:
case 1657:
case 3232:
case 87:
case 2597:
case 2419:
case 3445:
case 337:
case 2790:
case 1379:
case 372:
case 20:
case 3046:
case 2786:
case 3343:
case 98:
case 1641:
case 3091:
case 1185:
case 2831:
case 980:
case 762:
case 3014:
case 598:
case 3173:
case 3716:
case 3254:
case 148:
case 3564:
case 679:
case 536:
case 793:
case 3858:
case 2663:
case 1268:
case 1792:
case 1108:
case 775:
case 1200:
case 3334:
case 758:
case 238:
case 3450:
case 2304:
case 2698:
case 3776:
case 3113:
case 1788:
case 296:
case 553:
case 3461:
case 4068:
case 1377:
case 1037:
case 2417:
case 3733:
case 3352:
case 1221:
case 2183:
case 3428:
case 1319:
case 1147:
case 2295:
case 479:
case 331:
case 365:
case 2433:
case 3051:
case 2148:
case 1253:
case 1174:
case 3211:
case 3717:
case 3882:
case 3403:
case 1870:
case 3294:
case 1344:
case 2378:
case 1932:
case 3008:
case 3898:
case 2240:
case 2728:
case 1697:
case 2812:
case 2281:
case 2580:
case 1123:
case 2557:
case 462:
case 2335:
case 2267:
case 3993:
case 2075:
case 285:
case 2107:
case 1316:
case 2109:
case 1146:
case 113:
case 3139:
case 1242:
case 3388:
case 2789:
case 475:
case 2015:
case 104:
case 369:
case 1734:
case 1726:
case 1333:
case 3631:
case 584:
case 963:
case 2125:
case 927:
case 3570:
case 3271:
case 4042:
case 693:
case 3486:
case 1478:
case 242:
case 3921:
case 3085:
case 3490:
case 424:
case 1810:
case 2658:
case 843:
case 1191:
case 813:
case 1853:
case 212:
case 2999:
case 2144:
case 2736:
case 2724:
case 2034:
case 1414:
case 1270:
case 1571:
case 3894:
case 3004:
case 1715:
case 1089:
case 804:
case 3298:
case 1307:
case 2116:
case 1958:
case 2881:
case 1135:
case 2323:
case 2212:
case 2052:
case 871:
case 2867:
case 4070:
case 1045:
case 143:
case 201:
case 593:
case 736:
case 3602:
case 1842:
case 3437:
case 2869:
case 2713:
case 330:
case 1028:
case 558:
case 2855:
case 1738:
case 832:
case 33:
case 4010:
case 1309:
case 2346:
case 3384:
case 2391:
case 2043:
case 3783:
case 1118:
case 1087:
case 3871:
case 1594:
case 2997:
case 1775:
case 3103:
case 1210:
case 3553:
case 1511:
case 1325:
case 1061:
case 3263:
case 3832:
case 1447:
case 3669:
case 3970:
case 3128:
case 2483:
case 1362:
case 2088:
case 952:
case 3748:
case 3655:
case 2349:
case 2117:
case 3315:
case 229:
case 2530:
case 2231:
case 3413:
case 1451:
case 436:
case 1460:
case 3150:
case 2737:
case 92:
case 1003:
case 3201:
case 3707:
case 920:
case 498:
case 2965:
case 3854:
case 1408:
case 2385:
case 3568:
case 3258:
case 2611:
case 2360:
case 2996:
case 3189:
case 118:
case 1264:
case 3078:
case 2694:
case 2957:
case 1784:
case 2308:
case 1800:
case 2029:
case 3593:
case 1485:
case 2739:
case 1963:
case 968:
case 2347:
case 1532:
case 1449:
case 3035:
case 2406:
case 3375:
case 3436:
case 3424:
case 2443:
case 3268:
case 3792:
case 3558:
case 2955:
case 3200:
case 3501:
case 2969:
case 461:
case 1113:
case 1776:
case 3788:
case 2048:
case 3151:
case 1074:
case 1461:
case 494:
case 739:
case 2007:
case 3520:
case 1733:
case 1612:
case 1023:
case 2345:
case 623:
case 3147:
case 2856:
case 2940:
case 1672:
case 1124:
case 1136:
case 114:
case 3149:
case 3317:
case 3657:
case 3994:
case 2452:
case 4054:
case 1445:
case 137:
case 3729:
case 1953:
case 103:
case 3911:
case 1744:
case 3696:
case 1046:
case 3293:
case 1091:
case 3185:
case 964:
case 1801:
case 2426:
case 2434:
case 1716:
case 1564:
case 467:
case 2735:
case 1489:
case 423:
case 2610:
case 3404:
case 1858:
case 844:
case 255:
case 735:
case 21:
case 1900:
case 2857:
case 3242:
case 1392:
case 2880:
case 2062:
case 3699:
case 2006:
case 3435:
case 304:
case 278:
case 2896:
case 1968:
case 3036:
case 3752:
case 3333:
case 1631:
case 56:
case 3598:
case 2841:
case 1327:
case 2303:
case 1777:
case 1570:
case 3114:
case 1271:
case 3073:
case 1863:
case 439:
case 3582:
case 1490:
case 794:
case 688:
case 3810:
case 3622:
case 3013:
case 1211:
case 3563:
case 1717:
case 2427:
case 2664:
case 3870:
case 1294:
case 2386:
case 830:
case 83:
case 2902:
case 723:
case 1047:
case 2492:
case 2488:
case 1137:
case 576:
case 3656:
case 1666:
case 1602:
case 2760:
case 2257:
case 3842:
case 1437:
case 654:
case 2567:
case 2192:
case 1964:
case 2339:
case 2708:
case 13:
case 4063:
case 2540:
case 2241:
case 3118:
case 3594:
case 460:
case 1553:
case 3325:
case 3511:
case 2127:
case 46:
case 628:
case 454:
case 3491:
case 1811:
case 3920:
case 957:
case 3414:
case 3270:
case 1894:
case 108:
case 1004:
case 1706:
case 869:
case 1298:
case 2105:
case 2077:
case 476:
case 2265:
case 3135:
case 588:
case 2621:
case 3901:
case 990:
case 2259:
case 428:
case 2785:
case 3045:
case 24:
case 2931:
case 3446:
case 99:
case 814:
case 2222:
case 3104:
case 561:
case 535:
case 1189:
case 3868:
case 318:
case 1473:
case 2126:
case 2134:
case 3264:
case 2746:
case 1078:
case 1709:
case 202:
case 37:
case 3800:
case 273:
case 1640:
case 2972:
case 3485:
case 803:
case 211:
case 760:
case 2297:
case 982:
case 3383:
case 1725:
case 1035:
case 1375:
case 144:
case 1424:
case 1436:
case 2016:
case 2714:
case 2502:
case 4001:
case 1669:
case 1970:
case 2595:
case 2774:
case 3362:
case 2076:
case 1655:
case 2299:
case 3306:
case 1521:
case 234:
case 2324:
case 2336:
case 1161:
case 2033:
case 295:
case 3460:
case 1150:
case 567:
case 1201:
case 2373:
case 1707:
case 2912:
case 1258:
case 831:
case 2143:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1771830002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,];
var gg_b = "1771830002/";

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
