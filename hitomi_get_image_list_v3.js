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
case 1228:
case 2552:
case 3836:
case 2714:
case 2600:
case 2039:
case 627:
case 2435:
case 2430:
case 2728:
case 2308:
case 3856:
case 3739:
case 1562:
case 1813:
case 4043:
case 3755:
case 405:
case 4013:
case 2178:
case 1488:
case 434:
case 1075:
case 1518:
case 1040:
case 1472:
case 1466:
case 3176:
case 275:
case 1469:
case 3560:
case 1270:
case 3101:
case 5:
case 2676:
case 2162:
case 2459:
case 3973:
case 1702:
case 3551:
case 623:
case 3100:
case 472:
case 2231:
case 1389:
case 1465:
case 178:
case 1665:
case 1050:
case 851:
case 195:
case 3066:
case 819:
case 613:
case 2687:
case 2361:
case 3854:
case 2467:
case 2587:
case 3346:
case 2136:
case 1364:
case 164:
case 4067:
case 2872:
case 2962:
case 3751:
case 3892:
case 3095:
case 1016:
case 2216:
case 3731:
case 1324:
case 2310:
case 3810:
case 3444:
case 744:
case 1876:
case 690:
case 1711:
case 885:
case 1549:
case 3766:
case 4076:
case 66:
case 3514:
case 969:
case 3637:
case 717:
case 222:
case 2596:
case 1966:
case 168:
case 3211:
case 715:
case 2187:
case 52:
case 697:
case 3246:
case 2037:
case 1199:
case 1851:
case 4087:
case 2084:
case 2906:
case 1407:
case 3230:
case 1476:
case 1348:
case 3191:
case 3987:
case 3935:
case 637:
case 4040:
case 2197:
case 2651:
case 3584:
case 1385:
case 3914:
case 3334:
case 2871:
case 3287:
case 3258:
case 1142:
case 2250:
case 692:
case 4083:
case 1821:
case 515:
case 7:
case 2537:
case 3912:
case 3201:
case 104:
case 3556:
case 668:
case 1712:
case 1792:
case 1112:
case 2612:
case 505:
case 2519:
case 3418:
case 1801:
case 3673:
case 1738:
case 4080:
case 3975:
case 1740:
case 1715:
case 1686:
case 2092:
case 1405:
case 3217:
case 525:
case 1493:
case 989:
case 2857:
case 1400:
case 393:
case 1457:
case 1048:
case 1929:
case 2597:
case 1874:
case 2275:
case 290:
case 645:
case 1145:
case 2776:
case 3678:
case 237:
case 2014:
case 934:
case 1675:
case 3508:
case 3022:
case 411:
case 1150:
case 2543:
case 1181:
case 2716:
case 3925:
case 1977:
case 2317:
case 735:
case 3034:
case 2252:
case 2077:
case 3453:
case 911:
case 3738:
case 2124:
case 1317:
case 3490:
case 3754:
case 789:
case 3108:
case 2554:
case 3392:
case 861:
case 1751:
case 3564:
case 2496:
case 3076:
case 610:
case 1938:
case 2246:
case 1648:
case 2508:
case 1021:
case 2955:
case 1144:
case 3966:
case 2665:
case 315:
case 2696:
case 4:
case 2413:
case 3643:
case 527:
case 25:
case 2205:
case 2020:
case 1996:
case 1111:
case 3545:
case 113:
case 3630:
case 3461:
case 862:
case 2316:
case 2923:
case 153:
case 2498:
case 721:
case 965:
case 3245:
case 3555:
case 461:
case 2798:
case 1365:
case 3980:
case 3464:
case 3486:
case 1159:
case 2473:
case 3581:
case 1971:
case 2381:
case 1278:
case 2480:
case 3130:
case 945:
case 3028:
case 2304:
case 2078:
case 376:
case 1114:
case 792:
case 2738:
case 2194:
case 4033:
case 3214:
case 1161:
case 1067:
case 3933:
case 2969:
case 2942:
case 617:
case 1318:
case 1187:
case 446:
case 2530:
case 3515:
case 3425:
case 2996:
case 3360:
case 2035:
case 1059:
case 1340:
case 510:
case 1397:
case 746:
case 619:
case 3447:
case 1009:
case 3724:
case 3401:
case 1779:
case 1842:
case 1098:
case 752:
case 1932:
case 1866:
case 4077:
case 2097:
case 1771:
case 1544:
case 802:
case 578:
case 1924:
case 923:
case 2674:
case 2270:
case 798:
case 74:
case 486:
case 3438:
case 1201:
case 2976:
case 2309:
case 2032:
case 1441:
case 3730:
case 3614:
case 3424:
case 1063:
case 1157:
case 533:
case 2621:
case 2490:
case 3814:
case 2563:
case 1721:
case 2680:
case 3768:
case 1345:
case 2917:
case 2528:
case 3279:
case 583:
case 1840:
case 3779:
case 1548:
case 2844:
case 3115:
case 1629:
case 2457:
case 3893:
case 1420:
case 3944:
case 3575:
case 407:
case 187:
case 1508:
case 120:
case 516:
case 2255:
case 1386:
case 1631:
case 2588:
case 2730:
case 1913:
case 1507:
case 3889:
case 3638:
case 1989:
case 1435:
case 4063:
case 974:
case 2375:
case 247:
case 169:
case 4056:
case 2990:
case 2628:
case 3369:
case 2783:
case 799:
case 249:
case 1887:
case 2557:
case 1438:
case 2190:
case 3096:
case 1823:
case 283:
case 4014:
case 3576:
case 3468:
case 3137:
case 3573:
case 2877:
case 324:
case 1330:
case 2646:
case 3531:
case 2213:
case 1578:
case 3342:
case 3133:
case 2441:
case 2139:
case 3871:
case 970:
case 2948:
case 722:
case 224:
case 394:
case 2571:
case 3298:
case 3853:
case 688:
case 72:
case 628:
case 2040:
case 264:
case 2979:
case 1684:
case 3326:
case 1371:
case 1886:
case 1217:
case 2851:
case 1649:
case 678:
case 3563:
case 2220:
case 142:
case 1028:
case 1143:
case 1598:
case 2163:
case 2567:
case 232:
case 2679:
case 3165:
case 1359:
case 1621:
case 1797:
case 873:
case 1080:
case 3793:
case 1739:
case 652:
case 3393:
case 3275:
case 4020:
case 1366:
case 1427:
case 3615:
case 1504:
case 1839:
case 1917:
case 1762:
case 1678:
case 1780:
case 61:
case 2393:
case 1895:
case 2215:
case 2455:
case 845:
case 3239:
case 3929:
case 814:
case 3302:
case 3225:
case 765:
case 2260:
case 3734:
case 1444:
case 320:
case 2125:
case 2752:
case 1291:
case 3356:
case 2690:
case 2729:
case 3248:
case 1877:
case 3690:
case 1149:
case 939:
case 3512:
case 1619:
case 2553:
case 2532:
case 1944:
case 4092:
case 76:
case 1763:
case 38:
case 1255:
case 748:
case 259:
case 1312:
case 1304:
case 3019:
case 1774:
case 2438:
case 1639:
case 832:
case 1408:
case 2185:
case 2016:
case 2444:
case 3185:
case 927:
case 3178:
case 3760:
case 29:
case 1992:
case 2971:
case 3540:
case 4047:
case 160:
case 3282:
case 514:
case 3090:
case 3187:
case 1325:
case 2015:
case 2064:
case 2422:
case 653:
case 612:
case 2735:
case 649:
case 2284:
case 3037:
case 3080:
case 1574:
case 2477:
case 954:
case 1122:
case 3332:
case 3641:
case 720:
case 2420:
case 1512:
case 1732:
case 569:
case 2271:
case 2241:
case 207:
case 507:
case 749:
case 3415:
case 2947:
case 3900:
case 2414:
case 135:
case 1570:
case 1791:
case 2350:
case 2742:
case 3111:
case 2329:
case 194:
case 977:
case 3126:
case 2981:
case 167:
case 453:
case 3806:
case 3688:
case 3676:
case 1375:
case 314:
case 504:
case 1766:
case 2701:
case 1682:
case 2088:
case 611:
case 3186:
case 1460:
case 3166:
case 3608:
case 2336:
case 2584:
case 1041:
case 3229:
case 1942:
case 750:
case 2858:
case 1197:
case 1406:
case 2062:
case 638:
case 3117:
case 1257:
case 1029:
case 1899:
case 887:
case 595:
case 2822:
case 3310:
case 728:
case 1595:
case 847:
case 227:
case 3190:
case 3796:
case 1790:
case 1429:
case 2510:
case 2745:
case 3819:
case 1552:
case 1650:
case 3093:
case 3006:
case 1809:
case 65:
case 1430:
case 751:
case 3364:
case 1214:
case 1223:
case 3994:
case 1482:
case 2421:
case 591:
case 147:
case 3116:
case 769:
case 4072:
case 3586:
case 3208:
case 1072:
case 3570:
case 2495:
case 1843:
case 2116:
case 2853:
case 1914:
case 2534:
case 3336:
case 233:
case 893:
case 1616:
case 3113:
case 3928:
case 468:
case 1532:
case 1492:
case 2813:
case 262:
case 998:
case 133:
case 1919:
case 148:
case 1829:
case 3433:
case 1626:
case 415:
case 213:
case 3597:
case 2987:
case 655:
case 3740:
case 90:
case 3003:
case 883:
case 2146:
case 1783:
case 1802:
case 2307:
case 3757:
case 1180:
case 1141:
case 3213:
case 75:
case 2781:
case 1281:
case 2340:
case 719:
case 1786:
case 2342:
case 200:
case 1726:
case 762:
case 694:
case 2896:
case 3771:
case 110:
case 1879:
case 3835:
case 1915:
case 2443:
case 1689:
case 602:
case 342:
case 3961:
case 1646:
case 3209:
case 1133:
case 2247:
case 69:
case 701:
case 3414:
case 1229:
case 493:
case 1960:
case 3846:
case 2226:
case 2602:
case 1498:
case 2956:
case 3312:
case 2721:
case 2259:
case 777:
case 483:
case 3918:
case 654:
case 4089:
case 2232:
case 2845:
case 327:
case 1634:
case 2715:
case 2782:
case 2613:
case 917:
case 790:
case 905:
case 1061:
case 1816:
case 3981:
case 223:
case 3536:
case 3920:
case 3338:
case 196:
case 3874:
case 3011:
case 788:
case 3609:
case 1658:
case 3574:
case 2266:
case 3883:
case 3800:
case 553:
case 14:
case 1194:
case 331:
case 1179:
case 4034:
case 3876:
case 449:
case 2030:
case 1321:
case 592:
case 2391:
case 881:
case 1456:
case 1934:
case 1543:
case 2384:
case 383:
case 2855:
case 2222:
case 2425:
case 2586:
case 2801:
case 3473:
case 1556:
case 3803:
case 2750:
case 116:
case 1391:
case 45:
case 1696:
case 706:
case 2983:
case 1118:
case 599:
case 2371:
case 3999:
case 2412:
case 3067:
case 3965:
case 2560:
case 1878:
case 1832:
case 2866:
case 309:
case 1403:
case 3509:
case 2184:
case 1104:
case 244:
case 3358:
case 1903:
case 473:
case 3292:
case 60:
case 985:
case 3875:
case 2573:
case 2644:
case 2072:
case 2809:
case 3257:
case 2719:
case 4017:
case 3888:
case 517:
case 1052:
case 846:
case 2368:
case 3913:
case 56:
case 672:
case 3002:
case 3561:
case 3916:
case 1171:
case 2837:
case 3852:
case 4057:
case 1377:
case 239:
case 3879:
case 670:
case 2897:
case 1448:
case 947:
case 1295:
case 635:
case 1209:
case 304:
case 3035:
case 2663:
case 2497:
case 4079:
case 1224:
case 886:
case 4028:
case 3107:
case 2086:
case 2645:
case 3629:
case 555:
case 4064:
case 3276:
case 897:
case 3371:
case 1358:
case 1820:
case 2769:
case 55:
case 2337:
case 2861:
case 2463:
case 2289:
case 9:
case 396:
case 1489:
case 276:
case 3583:
case 786:
case 2918:
case 1310:
case 1042:
case 3976:
case 2133:
case 4086:
case 1487:
case 479:
case 1566:
case 3957:
case 3670:
case 631:
case 683:
case 3758:
case 3274:
case 2945:
case 1272:
case 804:
case 1948:
case 3207:
case 451:
case 528:
case 3507:
case 2095:
case 137:
case 3152:
case 1957:
case 1230:
case 1828:
case 3330:
case 3083:
case 2458:
case 3236:
case 3721:
case 124:
case 2269:
case 2397:
case 1300:
case 1196:
case 579:
case 671:
case 1773:
case 2760:
case 3144:
case 1177:
case 1131:
case 481:
case 938:
case 140:
case 2057:
case 1922:
case 3992:
case 1603:
case 226:
case 412:
case 2940:
case 1206:
case 1458:
case 1215:
case 487:
case 898:
case 614:
case 2151:
case 2193:
case 433:
case 3511:
case 634:
case 2061:
case 2042:
case 1540:
case 549:
case 2225:
case 2848:
case 1302:
case 1912:
case 3829:
case 1607:
case 1046:
case 674:
case 1425:
case 650:
case 11:
case 3153:
case 743:
case 2165:
case 4074:
case 2155:
case 2924:
case 1064:
case 806:
case 2555:
case 3858:
case 4045:
case 3821:
case 1501:
case 1095:
case 581:
case 1329:
case 1589:
case 1167:
case 1560:
case 1573:
case 424:
case 522:
case 1988:
case 2000:
case 3841:
case 2569:
case 3419:
case 3909:
case 3318:
case 1298:
case 1132:
case 132:
case 2668:
case 1586:
case 2161:
case 3223:
case 580:
case 3572:
case 2933:
case 577:
case 2919:
case 3005:
case 1747:
case 3890:
case 1542:
case 2756:
case 2746:
case 494:
case 2762:
case 2974:
case 272:
case 141:
case 2838:
case 3985:
case 3632:
case 2957:
case 2442:
case 3535:
case 681:
case 1557:
case 2922:
case 2675:
case 1360:
case 738:
case 4000:
case 4039:
case 935:
case 2764:
case 2970:
case 1459:
case 2954:
case 198:
case 2545:
case 574:
case 3801:
case 1647:
case 2476:
case 2536:
case 1836:
case 3149:
case 2672:
case 2091:
case 2112:
case 2616:
case 44:
case 350:
case 3309:
case 2010:
case 3596:
case 4009:
case 1585:
case 3633:
case 139:
case 3582:
case 2280:
case 1238:
case 615:
case 3867:
case 2980:
case 1094:
case 2865:
case 98:
case 2944:
case 201:
case 4031:
case 1319:
case 199:
case 1244:
case 3004:
case 367:
case 3308:
case 2093:
case 2950:
case 2318:
case 2718:
case 2734:
case 427:
case 562:
case 2826:
case 1859:
case 1986:
case 4081:
case 3489:
case 872:
case 3271:
case 270:
case 2579:
case 878:
case 588:
case 2369:
case 1714:
case 1943:
case 2419:
case 2470:
case 1911:
case 2835:
case 4070:
case 656:
case 89:
case 2264:
case 1630:
case 2380:
case 2207:
case 993:
case 3898:
case 1908:
case 3571:
case 1692:
case 3417:
case 2415:
case 2810:
case 3562:
case 2364:
case 3141:
case 1567:
case 1073:
case 4030:
case 206:
case 3941:
case 3640:
case 879:
case 117:
case 1394:
case 2492:
case 138:
case 704:
case 1169:
case 2031:
case 2396:
case 2290:
case 596:
case 2706:
case 1606:
case 3455:
case 2018:
case 2094:
case 1437:
case 959:
case 1592:
case 3927:
case 624:
case 3861:
case 2723:
case 509:
case 3460:
case 1867:
case 4032:
case 373:
case 448:
case 3544:
case 3058:
case 2235:
case 420:
case 1120:
case 2786:
case 773:
case 3125:
case 2227:
case 0:
case 3904:
case 1837:
case 3831:
case 2478:
case 800:
case 1632:
case 1378:
case 1116:
case 28:
case 285:
case 1901:
case 3384:
case 607:
case 3604:
case 3550:
case 3693:
case 2186:
case 1687:
case 2209:
case 2148:
case 1709:
case 3174:
case 47:
case 958:
case 1113:
case 2559:
case 4015:
case 544:
case 2452:
case 3266:
case 2313:
case 3901:
case 1301:
case 3253:
case 2025:
case 81:
case 1213:
case 356:
case 1100:
case 46:
case 3549:
case 669:
case 876:
case 834:
case 3339:
case 1962:
case 1803:
case 3256:
case 3736:
case 824:
case 343:
case 3457:
case 1796:
case 2110:
case 181:
case 2577:
case 3340:
case 1731:
case 1019:
case 3416:
case 3039:
case 3362:
case 1683:
case 1089:
case 2977:
case 1275:
case 1752:
case 2883:
case 930:
case 940:
case 2122:
case 2201:
case 1525:
case 2315:
case 2551:
case 1354:
case 1191:
case 892:
case 1676:
case 392:
case 3639:
case 2494:
case 1698:
case 3009:
case 3534:
case 736:
case 1232:
case 1078:
case 2234:
case 2673:
case 3748:
case 1852:
case 1993:
case 457:
case 3741:
case 3188:
case 3968:
case 2401:
case 3613:
case 3505:
case 1066:
case 149:
case 2814:
case 3592:
case 855:
case 2320:
case 561:
case 1505:
case 2529:
case 366:
case 3127:
case 3943:
case 3048:
case 2437:
case 3971:
case 2564:
case 758:
case 3142:
case 3212:
case 957:
case 2661:
case 1635:
case 1087:
case 3675:
case 3783:
case 2172:
case 2599:
case 1884:
case 3085:
case 2759:
case 711:
case 3524:
case 4036:
case 2267:
case 1467:
case 1069:
case 3921:
case 1020:
case 925:
case 1471:
case 1798:
case 3109:
case 413:
case 3737:
case 2720:
case 4025:
case 530:
case 1999:
case 1937:
case 1719:
case 1239:
case 94:
case 2743:
case 13:
case 2474:
case 2283:
case 1423:
case 820:
case 2908:
case 2887:
case 1889:
case 1387:
case 3381:
case 352:
case 2566:
case 4058:
case 400:
case 474:
case 3720:
case 3713:
case 2951:
case 4002:
case 1316:
case 2219:
case 1254:
case 131:
case 2475:
case 2978:
case 1531:
case 686:
case 2856:
case 1128:
case 1136:
case 848:
case 931:
case 3589:
case 3880:
case 2277:
case 359:
case 3015:
case 3121:
case 1956:
case 3250:
case 1521:
case 3822:
case 1503:
case 1950:
case 3216:
case 1339:
case 713:
case 1695:
case 3868:
case 755:
case 1485:
case 3277:
case 3012:
case 3073:
case 3661:
case 663:
case 729:
case 1093:
case 218:
case 3041:
case 489:
case 1011:
case 3283:
case 2517:
case 21:
case 435:
case 1928:
case 2737:
case 3905:
case 82:
case 2152:
case 565:
case 77:
case 2065:
case 3265:
case 3423:
case 1105:
case 1409:
case 3485:
case 2652:
case 3241:
case 896:
case 2153:
case 1741:
case 217:
case 2736:
case 950:
case 783:
case 2594:
case 3949:
case 426:
case 136:
case 3368:
case 3081:
case 2199:
case 1381:
case 443:
case 1900:
case 2773:
case 901:
case 3344:
case 3064:
case 1653:
case 3621:
case 2417:
case 1101:
case 2314:
case 2033:
case 1013:
case 3496:
case 225:
case 1115:
case 731:
case 3894:
case 3958:
case 3654:
case 2864:
case 3038:
case 2803:
case 3385:
case 417:
case 3960:
case 1480:
case 3527:
case 491:
case 563:
case 2757:
case 1793:
case 827:
case 774:
case 1534:
case 3466:
case 1376:
case 3094:
case 1308:
case 3972:
case 1554:
case 2138:
case 1138:
case 2100:
case 3215:
case 1509:
case 2379:
case 3160:
case 3811:
case 1663:
case 1414:
case 3521:
case 3775:
case 1088:
case 547:
case 112:
case 1612:
case 2063:
case 3648:
case 1034:
case 1033:
case 805:
case 307:
case 2398:
case 308:
case 295:
case 915:
case 1830:
case 2878:
case 1369:
case 1242:
case 106:
case 1361:
case 1902:
case 1166:
case 1627:
case 163:
case 1306:
case 3046:
case 3705:
case 564:
case 1958:
case 1515:
case 961:
case 2362:
case 2582:
case 1579:
case 3565:
case 278:
case 1588:
case 3650:
case 338:
case 3443:
case 3379:
case 657:
case 4084:
case 1846:
case 1569:
case 2863:
case 1124:
case 101:
case 3778:
case 1490:
case 8:
case 3533:
case 500:
case 2882:
case 2833:
case 85:
case 541:
case 2288:
case 2575:
case 3040:
case 4027:
case 363:
case 3224:
case 2143:
case 944:
case 1497:
case 1015:
case 3053:
case 1580:
case 3270:
case 3131:
case 2465:
case 2274:
case 3910:
case 2927:
case 2502:
case 1987:
case 2311:
case 726:
case 662:
case 3594:
case 2992:
case 425:
case 2965:
case 97:
case 2256:
case 594:
case 3732:
case 2654:
case 265:
case 122:
case 4090:
case 2089:
case 2352:
case 2356:
case 1610:
case 1710:
case 705:
case 3991:
case 447:
case 2373:
case 3902:
case 3695:
case 4069:
case 1175:
case 2027:
case 609:
case 3655:
case 4041:
case 1393:
case 2175:
case 3343:
case 2400:
case 1246:
case 1628:
case 990:
case 2423:
case 3547:
case 3016:
case 723:
case 23:
case 606:
case 2386:
case 1920:
case 3897:
case 1454:
case 2901:
case 382:
case 1551:
case 150:
case 1421:
case 2347:
case 3838:
case 2655:
case 240:
case 1189:
case 2653:
case 589:
case 469:
case 1690:
case 2642:
case 2785:
case 1292:
case 2011:
case 620:
case 3542:
case 2322:
case 467:
case 2904:
case 358:
case 2433:
case 2113:
case 2056:
case 1923:
case 3349:
case 3672:
case 1744:
case 3071:
case 279:
case 1564:
case 933:
case 3477:
case 3725:
case 3539:
case 3532:
case 2181:
case 2028:
case 1134:
case 703:
case 1273:
case 2902:
case 2129:
case 1326:
case 3787:
case 3651:
case 1323:
case 1283:
case 3923:
case 2328:
case 1668:
case 2341:
case 1183:
case 1333:
case 1451:
case 2615:
case 2434:
case 3123:
case 1303:
case 67:
case 3315:
case 1708:
case 190:
case 1906:
case 882:
case 2102:
case 2300:
case 863:
case 114:
case 2834:
case 895:
case 3383:
case 2549:
case 466:
case 3479:
case 659:
case 3627:
case 1475:
case 2230:
case 3969:
case 1051:
case 2006:
case 3280:
case 1825:
case 3989:
case 3591:
case 379:
case 339:
case 3353:
case 1135:
case 2158:
case 3671:
case 3628:
case 2349:
case 1311:
case 1768:
case 821:
case 2936:
case 235:
case 1722:
case 2888:
case 2223:
case 1898:
case 937:
case 1657:
case 2570:
case 422:
case 2659:
case 154:
case 2357:
case 3429:
case 3020:
case 3624:
case 3619:
case 1526:
case 3552:
case 2390:
case 1833:
case 590:
case 2953:
case 409:
case 1516:
case 831:
case 3235:
case 1953:
case 1259:
case 801:
case 1584:
case 2339:
case 630:
case 1071:
case 3441:
case 865:
case 1156:
case 877:
case 2198:
case 2354:
case 1204:
case 1974:
case 2758:
case 374:
case 2424:
case 3942:
case 2598:
case 3984:
case 360:
case 152:
case 682:
case 3525:
case 3227:
case 3372:
case 3032:
case 209:
case 2331:
case 4088:
case 979:
case 2732:
case 3729:
case 1703:
case 2525:
case 3745:
case 2666:
case 1513:
case 2048:
case 2021:
case 1764:
case 3702:
case 3119:
case 1894:
case 2258:
case 73:
case 3940:
case 707:
case 3568:
case 2541:
case 651:
case 3397:
case 193:
case 538:
case 1666:
case 3140:
case 1186:
case 256:
case 2469:
case 910:
case 807:
case 2036:
case 2592:
case 3375:
case 2943:
case 1006:
case 2824:
case 2632:
case 2387:
case 3541:
case 3156:
case 3870:
case 3834:
case 344:
case 1811:
case 502:
case 2724:
case 3764:
case 3606:
case 3599:
case 22:
case 1484:
case 1039:
case 282:
case 3660:
case 2169:
case 1233:
case 1927:
case 1001:
case 2624:
case 30:
case 2344:
case 2301:
case 1991:
case 3303:
case 268:
case 1357:
case 1446:
case 1539:
case 3158:
case 1288:
case 3548:
case 2504:
case 2898:
case 3818:
case 43:
case 2268:
case 1706:
case 2867:
case 1416:
case 2276:
case 3602:
case 345:
case 2358:
case 2325:
case 1694:
case 3869:
case 3321:
case 3262:
case 2073:
case 3963:
case 1936:
case 3680:
case 922:
case 1060:
case 1148:
case 3237:
case 1290:
case 1671:
case 1997:
case 2408:
case 1274:
case 1477:
case 3710:
case 4062:
case 1737:
case 377:
case 3922:
case 943:
case 1211:
case 3052:
case 3070:
case 2409:
case 2722:
case 408:
case 844:
case 3567:
case 3422:
case 57:
case 2109:
case 3147:
case 864:
case 3470:
case 3872:
case 2691:
case 3520:
case 3513:
case 646:
case 1147:
case 1221:
case 1594:
case 145:
case 2217:
case 1478:
case 130:
case 3962:
case 936:
case 2607:
case 2886:
case 710:
case 2689:
case 1775:
case 534:
case 2017:
case 2429:
case 2643:
case 3347:
case 1660:
case 1038:
case 2751:
case 1701:
case 323:
case 3386:
case 2601:
case 3842:
case 3881:
case 229:
case 640:
case 1804:
case 2481:
case 2292:
case 2648:
case 2903:
case 2591:
case 2703:
case 39:
case 2622:
case 2527:
case 1959:
case 1553:
case 1396:
case 1717:
case 1965:
case 2360:
case 1704:
case 3295:
case 173:
case 3079:
case 1170:
case 899:
case 2330:
case 3794:
case 1395:
case 1815:
case 214:
case 1761:
case 1881:
case 712:
case 302:
case 2298:
case 266:
case 123:
case 3694:
case 3936:
case 2297:
case 920:
case 1280:
case 404:
case 410:
case 1614:
case 4049:
case 1699:
case 904:
case 208:
case 3056:
case 3712:
case 2171:
case 2812:
case 3129:
case 2966:
case 3997:
case 3799:
case 3503:
case 2938:
case 745:
case 2712:
case 1661:
case 3616:
case 698:
case 1025:
case 2104:
case 3600:
case 3017:
case 1907:
case 3389:
case 2682:
case 1674:
case 1506:
case 3222:
case 946:
case 3284:
case 1880:
case 2472:
case 1372:
case 20:
case 2619:
case 1307:
case 3526:
case 490:
case 2820:
case 2700:
case 2788:
case 2641:
case 33:
case 3171:
case 784:
case 2418:
case 3634:
case 3788:
case 236:
case 496:
case 1794:
case 3000:
case 2493:
case 1000:
case 3148:
case 3756:
case 1982:
case 1464:
case 2085:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1694167201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,];
var gg_b = "1694167201/";

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
      subdomainx = String.fromCharCode(97 + gg_m[x]);
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
