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
case 1066:
case 7:
case 2908:
case 371:
case 2404:
case 1329:
case 2879:
case 3361:
case 1773:
case 2878:
case 590:
case 393:
case 3778:
case 4012:
case 3254:
case 2381:
case 587:
case 1477:
case 281:
case 3100:
case 33:
case 999:
case 3325:
case 2359:
case 3731:
case 1902:
case 2358:
case 3256:
case 519:
case 3149:
case 1985:
case 2318:
case 3160:
case 3617:
case 2319:
case 872:
case 2466:
case 1430:
case 968:
case 1642:
case 3486:
case 354:
case 2180:
case 304:
case 285:
case 1983:
case 2649:
case 4052:
case 4028:
case 2969:
case 1006:
case 4029:
case 2577:
case 1504:
case 57:
case 3988:
case 3484:
case 596:
case 564:
case 3680:
case 1897:
case 549:
case 788:
case 3034:
case 2250:
case 405:
case 1378:
case 2852:
case 776:
case 3373:
case 2994:
case 814:
case 3752:
case 3728:
case 2499:
case 1017:
case 2106:
case 3729:
case 131:
case 2755:
case 582:
case 2543:
case 2043:
case 1517:
case 3036:
case 638:
case 1177:
case 2457:
case 1331:
case 17:
case 3207:
case 3542:
case 2753:
case 1858:
case 940:
case 2545:
case 2104:
case 3534:
case 3093:
case 2713:
case 4031:
case 1445:
case 451:
case 877:
case 869:
case 2933:
case 187:
case 232:
case 3946:
case 1099:
case 2291:
case 1557:
case 3595:
case 3267:
case 3186:
case 1598:
case 770:
case 2715:
case 2684:
case 1057:
case 4078:
case 2527:
case 1443:
case 4079:
case 489:
case 3460:
case 2812:
case 3944:
case 119:
case 2166:
case 401:
case 2935:
case 3815:
case 1747:
case 3932:
case 3045:
case 1677:
case 2855:
case 1781:
case 1861:
case 1493:
case 1276:
case 673:
case 1549:
case 3852:
case 3994:
case 114:
case 786:
case 1797:
case 691:
case 3499:
case 2536:
case 3543:
case 925:
case 3043:
case 1722:
case 18:
case 3457:
case 1274:
case 1495:
case 87:
case 3996:
case 636:
case 1049:
case 2542:
case 1825:
case 2375:
case 896:
case 3545:
case 3753:
case 1060:
case 2534:
case 948:
case 3686:
case 1939:
case 3713:
case 1938:
case 177:
case 3933:
case 169:
case 3027:
case 3417:
case 1719:
case 890:
case 630:
case 2813:
case 921:
case 2095:
case 1847:
case 695:
case 1971:
case 1500:
case 3527:
case 3812:
case 3935:
case 3166:
case 479:
case 797:
case 3210:
case 2449:
case 2699:
case 3397:
case 3908:
case 309:
case 577:
case 3600:
case 271:
case 3404:
case 1627:
case 3909:
case 2698:
case 2361:
case 1584:
case 2990:
case 3157:
case 4015:
case 293:
case 2323:
case 2779:
case 3381:
case 1772:
case 3199:
case 960:
case 2911:
case 1224:
case 23:
case 3198:
case 144:
case 3831:
case 2325:
case 2657:
case 3359:
case 2731:
case 359:
case 3358:
case 3322:
case 903:
case 2149:
case 2216:
case 2160:
case 4053:
case 2148:
case 994:
case 1982:
case 966:
case 1645:
case 1965:
case 3077:
case 337:
case 882:
case 3180:
case 514:
case 385:
case 3649:
case 2301:
case 2347:
case 3969:
case 1921:
case 792:
case 1134:
case 1643:
case 275:
case 2988:
case 918:
case 2680:
case 2484:
case 2808:
case 3591:
case 2809:
case 2474:
case 744:
case 917:
case 383:
case 1441:
case 3010:
case 3708:
case 291:
case 3811:
case 8:
case 3170:
case 989:
case 2931:
case 2067:
case 2124:
case 1396:
case 1802:
case 3339:
case 1885:
case 2236:
case 1765:
case 905:
case 3243:
case 96:
case 1260:
case 192:
case 1248:
case 230:
case 2041:
case 1249:
case 3851:
case 1116:
case 1883:
case 2507:
case 2541:
case 2242:
case 2788:
case 2869:
case 2789:
case 2868:
case 772:
case 2234:
case 1721:
case 3740:
case 1335:
case 440:
case 3769:
case 4094:
case 1467:
case 586:
case 1308:
case 4068:
case 3955:
case 2424:
case 224:
case 912:
case 3674:
case 2176:
case 693:
case 1456:
case 3303:
case 468:
case 888:
case 1107:
case 3120:
case 63:
case 2426:
case 2174:
case 714:
case 186:
case 3676:
case 1958:
case 1922:
case 1454:
case 3277:
case 1414:
case 1610:
case 1167:
case 410:
case 1024:
case 2385:
case 3733:
case 2554:
case 1919:
case 2746:
case 2833:
case 923:
case 3365:
case 197:
case 2056:
case 1739:
case 654:
case 3437:
case 1284:
case 2383:
case 4008:
case 2556:
case 1368:
case 3735:
case 2912:
case 1771:
case 3363:
case 1286:
case 3915:
case 675:
case 3832:
case 3929:
case 494:
case 3620:
case 1641:
case 3424:
case 1961:
case 3952:
case 77:
case 2470:
case 796:
case 3894:
case 1037:
case 1311:
case 2796:
case 1537:
case 962:
case 3896:
case 2676:
case 4051:
case 3302:
case 418:
case 731:
case 2305:
case 2277:
case 659:
case 1839:
case 170:
case 735:
case 94:
case 1191:
case 3554:
case 3746:
case 719:
case 1187:
case 2846:
case 3056:
case 2437:
case 880:
case 1351:
case 1070:
case 3383:
case 1570:
case 460:
case 4090:
case 1947:
case 1667:
case 2321:
case 3054:
case 1389:
case 787:
case 2363:
case 1388:
case 2832:
case 3979:
case 1257:
case 3809:
case 3474:
case 373:
case 570:
case 3295:
case 3978:
case 3567:
case 2624:
case 2709:
case 2420:
case 2010:
case 1973:
case 3790:
case 2708:
case 1803:
case 4044:
case 1:
case 1450:
case 2087:
case 967:
case 3476:
case 1298:
case 3067:
case 2626:
case 336:
case 3711:
case 2339:
case 3637:
case 2338:
case 1882:
case 984:
case 1865:
case 892:
case 1346:
case 2550:
case 533:
case 330:
case 1410:
case 1020:
case 3041:
case 395:
case 3788:
case 59:
case 3869:
case 576:
case 3789:
case 2050:
case 3234:
case 3868:
case 2889:
case 1491:
case 1863:
case 782:
case 1783:
case 1332:
case 1568:
case 478:
case 1977:
case 3065:
case 1540:
case 3521:
case 3222:
case 3258:
case 3259:
case 2583:
case 540:
case 3820:
case 3490:
case 3694:
case 784:
case 2874:
case 22:
case 2904:
case 3563:
case 2408:
case 1253:
case 2354:
case 1750:
case 3776:
case 982:
case 71:
case 2083:
case 866:
case 2194:
case 1326:
case 1069:
case 1040:
case 1255:
case 3021:
case 3297:
case 3565:
case 2906:
case 65:
case 3451:
case 1215:
case 3003:
case 1008:
case 2646:
case 4026:
case 1009:
case 1485:
case 2247:
case 2502:
case 860:
case 1710:
case 3984:
case 1213:
case 665:
case 1509:
case 2002:
case 327:
case 3489:
case 1508:
case 1671:
case 1787:
case 779:
case 497:
case 1791:
case 3635:
case 2468:
case 3219:
case 3146:
case 767:
case 2644:
case 2133:
case 3503:
case 2440:
case 3218:
case 2632:
case 2316:
case 1483:
case 1033:
case 3900:
case 1927:
case 3571:
case 1856:
case 3111:
case 626:
case 2307:
case 2341:
case 3609:
case 2998:
case 2275:
case 3039:
case 1102:
case 2770:
case 2824:
case 1374:
case 3038:
case 935:
case 1603:
case 599:
case 3538:
case 146:
case 2273:
case 3190:
case 250:
case 1533:
case 3837:
case 1183:
case 3446:
case 2917:
case 996:
case 2140:
case 2433:
case 97:
case 2651:
case 516:
case 256:
case 1596:
case 3188:
case 2737:
case 1814:
case 1185:
case 3432:
case 2367:
case 3668:
case 3948:
case 3960:
case 1621:
case 568:
case 762:
case 1663:
case 308:
case 2689:
case 3387:
case 1816:
case 1162:
case 602:
case 2900:
case 2111:
case 1046:
case 3999:
case 2571:
case 300:
case 3494:
case 2609:
case 3307:
case 3341:
case 3998:
case 1532:
case 1231:
case 560:
case 1105:
case 2038:
case 1544:
case 121:
case 3611:
case 846:
case 3496:
case 969:
case 1995:
case 1278:
case 3826:
case 213:
case 1754:
case 2071:
case 652:
case 1103:
case 3169:
case 840:
case 1714:
case 2310:
case 3917:
case 3168:
case 2189:
case 998:
case 1439:
case 2949:
case 2669:
case 3367:
case 1716:
case 4020:
case 306:
case 222:
case 914:
case 3435:
case 1182:
case 2668:
case 2391:
case 1165:
case 3688:
case 607:
case 2521:
case 118:
case 2222:
case 2258:
case 3356:
case 3062:
case 774:
case 2774:
case 3225:
case 243:
case 2694:
case 705:
case 49:
case 2490:
case 1707:
case 32:
case 3085:
case 3720:
case 1588:
case 525:
case 488:
case 3354:
case 1089:
case 1405:
case 868:
case 2063:
case 755:
case 4037:
case 166:
case 3083:
case 3261:
case 2696:
case 2021:
case 615:
case 2986:
case 1212:
case 1171:
case 639:
case 944:
case 2505:
case 751:
case 1482:
case 899:
case 2144:
case 2132:
case 3247:
case 3201:
case 1590:
case 3002:
case 4070:
case 1463:
case 742:
case 521:
case 2005:
case 3468:
case 2146:
case 2635:
case 2503:
case 789:
case 3632:
case 1767:
case 470:
case 3469:
case 2218:
case 153:
case 3704:
case 2655:
case 1877:
case 3629:
case 202:
case 47:
case 155:
case 81:
case 3920:
case 1907:
case 1941:
case 1398:
case 1661:
case 794:
case 3393:
case 2479:
case 2804:
case 1122:
case 3155:
case 718:
case 431:
case 1197:
case 2128:
case 174:
case 16:
case 2431:
case 884:
case 1357:
case 252:
case 512:
case 3073:
case 1317:
case 101:
case 2866:
case 867:
case 2345:
case 2271:
case 1079:
case 2613:
case 3115:
case 753:
case 1078:
case 490:
case 703:
case 1118:
case 1578:
case 1601:
case 3075:
case 1967:
case 320:
case 2072:
case 1579:
case 1119:
case 1246:
case 487:
case 622:
case 2343:
case 151:
case 3336:
case 3612:
case 2784:
case 1380:
case 3113:
case 3573:
case 2615:
case 1031:
case 721:
case 1481:
case 3679:
case 2377:
case 3800:
case 1956:
case 207:
case 2899:
case 3547:
case 643:
case 2131:
case 3202:
case 2898:
case 3970:
case 2452:
case 2924:
case 3798:
case 1304:
case 3799:
case 2019:
case 4064:
case 2519:
case 2203:
case 3631:
case 3757:
case 334:
case 1290:
case 84:
case 3001:
case 4066:
case 1892:
case 35:
case 1742:
case 1734:
case 2081:
case 1289:
case 1419:
case 862:
case 3717:
case 4006:
case 1029:
case 2522:
case 2558:
case 1845:
case 3061:
case 2559:
case 3025:
case 3780:
case 3262:
case 3848:
case 2022:
case 2412:
case 1736:
case 2581:
case 4004:
case 2760:
case 1364:
case 3285:
case 2880:
case 30:
case 1916:
case 725:
case 3205:
case 307:
case 2678:
case 2501:
case 1423:
case 2970:
case 3898:
case 1013:
case 3428:
case 62:
case 2798:
case 1727:
case 2455:
case 3019:
case 2799:
case 3519:
case 1792:
case 1015:
case 3518:
case 2757:
case 823:
case 1173:
case 3926:
case 1895:
case 14:
case 970:
case 1672:
case 25:
case 1386:
case 2937:
case 51:
case 315:
case 2023:
case 3330:
case 3817:
case 1553:
case 1745:
case 2717:
case 162:
case 1834:
case 1055:
case 99:
case 3522:
case 3558:
case 1842:
case 988:
case 2283:
case 1384:
case 3059:
case 2780:
case 2561:
case 3058:
case 3022:
case 2860:
case 933:
case 3597:
case 3412:
case 3581:
case 1053:
case 3282:
case 3760:
case 472:
case 1401:
case 584:
case 2285:
case 2629:
case 341:
case 1300:
case 4060:
case 2153:
case 1697:
case 226:
case 2652:
case 11:
case 600:
case 1296:
case 48:
case 663:
case 1125:
case 1681:
case 562:
case 3804:
case 498:
case 2706:
case 3653:
case 874:
case 3152:
case 1161:
case 86:
case 2395:
case 805:
case 650:
case 184:
case 1658:
case 3806:
case 1618:
case 2073:
case 2886:
case 1910:
case 1730:
case 167:
case 3345:
case 3572:
case 3271:
case 3613:
case 3786:
case 2115:
case 656:
case 469:
case 4000:
case 3072:
case 1348:
case 1233:
case 1360:
case 2764:
case 3343:
case 1987:
case 2612:
case 2573:
case 2113:
case 3239:
case 1363:
case 732:
case 2389:
case 3687:
case 4003:
case 3524:
case 3286:
case 3369:
case 2667:
case 2110:
case 2570:
case 2266:
case 538:
case 1846:
case 397:
case 4005:
case 427:
case 2351:
case 3284:
case 2070:
case 1437:
case 3167:
case 2839:
case 3414:
case 270:
case 1382:
case 1733:
case 2838:
case 1676:
case 443:
case 1305:
case 95:
case 3958:
case 2204:
case 288:
case 2311:
case 276:
case 1120:
case 29:
case 2537:
case 2037:
case 233:
case 3981:
case 2150:
case 965:
case 1303:
case 4021:
case 3308:
case 2206:
case 824:
case 2390:
case 2607:
case 458:
case 2217:
case 926:
case 2344:
case 1889:
case 3721:
case 2332:
case 2616:
case 1888:
case 3574:
case 635:
case 895:
case 1137:
case 2487:
case 1050:
case 1550:
case 3782:
case 2346:
case 3260:
case 422:
case 2865:
case 2785:
case 690:
case 3576:
case 1851:
case 830:
case 2280:
case 3074:
case 2762:
case 1339:
case 1243:
case 1338:
case 3802:
case 67:
case 1626:
case 3396:
case 2975:
case 1227:
case 2805:
case 781:
case 2299:
case 3972:
case 3705:
case 2450:
case 1087:
case 2654:
case 709:
case 2702:
case 4039:
case 3394:
case 3441:
case 3407:
case 759:
case 2803:
case 1591:
case 1292:
case 3154:
case 4071:
case 413:
case 2257:
case 873:
case 3616:
case 941:
case 2467:
case 2574:
case 928:
case 2883:
case 1507:
case 2076:
case 1788:
case 1868:
case 1234:
case 1789:
case 1840:
case 3821:
case 2248:
case 2333:
case 2260:
case 2249:
case 1041:
case 2576:
case 3020:
case 130:
case 2862:
case 2885:
case 3762:
case 1637:
case 1236:
case 677:
case 2765:
case 3975:
case 3298:
case 1124:
case 2396:
case 3805:
case 2200:
case 1711:
case 3299:
case 2972:
case 3654:
case 698:
case 1476:
case 3702:
case 68:
case 463:
case 1293:
case 3973:
case 2394:
case 883:
case 614:
case 2441:
case 191:
case 3803:
case 2154:
case 1808:
case 3656:
case 2703:
case 450:
case 73:
case 1474:
case 1835:
case 3389:
case 536:
case 2286:
case 907:
case 3947:
case 1732:
case 3667:
case 2369:
case 2416:
case 3110:
case 3266:
case 2691:
case 829:
case 591:
case 1056:
case 3070:
case 2526:
case 1362:
case 2739:
case 280:
case 2167:
case 1385:
case 957:
case 3839:
case 1302:
case 286:
case 1896:
case 1174:
case 2959:
case 1514:
case 3925:
case 3204:
case 3311:
case 4085:
case 376:
case 42:
case 1426:
case 39:
case 2107:
case 2141:
case 644:
case 3537:
case 939:
case 1176:
case 333:
case 3206:
case 3390:
case 1014:
case 1952:
case 3607:
case 4083:
case 1448:
case 1944:
case 1449:
case 1932:
case 3701:
case 1593:
case 3057:
case 2801:
case 335:
case 1095:
case 1186:
case 3443:
case 3599:
case 1712:
case 3099:
case 387:
case 2719:
case 692:
case 2000:
case 420:
case 2718:
case 1595:
case 1813:
case 3098:
case 1267:
case 593:
case 3818:
case 1093:
case 2442:
case 2630:
case 277:
case 3819:
case 571:
case 2938:
case 3220:
case 426:
case 37:
case 958:
case 1542:
case 1534:
case 3858:
case 3177:
case 3492:
case 298:
case 2495:
case 724:
case 3080:
case 28:
case 504:
case 2274:
case 3580:
case 1752:
case 1728:
case 922:
case 1373:
case 554:
case 1604:
case 3881:
case 1729:
case 3017:
case 1855:
case 2548:
case 2677:
case 1034:
case 2276:
case 3723:
case 908:
case 2861:
case 2493:
case 2963:
case 2134:
case 943:
case 1989:
case 1680:
case 175:
case 2315:
case 730:
case 2142:
case 1301:
case 3006:
case 2645:
case 697:
case 1951:
case 2313:
case 1486:
case 3642:
case 3985:
case 1216:
case 40:
case 1617:
case 272:
case 349:
case 3695:
case 3902:
case 1731:
case 1325:
case 2875:
case 2084:
case 686:
case 791:
case 2692:
case 3566:
case 859:
case 3872:
case 1100:
case 3127:
case 244:
case 2224:
case 13:
case 2586:
case 2873:
case 2195:
case 1254:
case 3477:
case 3329:
case 809:
case 2355:
case 1699:
case 3066:
case 4047:
case 3352:
case 3328:
case 434:
case 1361:
case 4081:
case 3643:
case 3134:
case 2636:
case 2312:
case 2237:
case 185:
case 804:
case 1117:
case 439:
case 2006:
case 1968:
case 1648:
case 3921:
case 2430:
case 137:
case 3645:
case 1077:
case 3965:
case 3313:
case 4059:
case 670:
case 1318:
case 372:
case 3982:
case 1466:
case 249:
case 2004:
case 2695:
case 2270:
case 3084:
case 2566:
case 3905:
case 2872:
case 2127:
case 1530:
case 1199:
case 4018:
case 69:
case 344:
case 1831:
case 1198:
case 3586:
case 2775:
case 3224:
case 676:
case 3195:
case 3086:
case 3873:
case 633:
case 1157:
case 893:
case 2564:
case 3903:
case 3627:
case 109:
case 1600:
case 457:
case 1397:
case 738:
case 1909:
case 900:
case 219:
case 559:
case 2701:
case 1210:
case 1684:
case 3801:
case 2598:
case 1715:
case 2443:
case 963:
case 3971:
case 132:
case 2099:
case 581:
case 1933:
case 3000:
case 1164:
case 3718:
case 290:
case 2557:
case 3630:
case 509:
case 2819:
case 729:
case 950:
case 264:
case 296:
case 27:
case 3825:
case 2220:
case 1996:
case 402:
case 1545:
case 1372:
case 2822:
case 2858:
case 3048:
case 2492:
case 956:
case 428:
case 398:
case 3722:
case 3495:
case 585:
case 1457:
case 3274:
case 3759:
case 2080:
case 38:
case 1994:
case 2761:
case 231:
case 537:
case 1543:
case 2881:
case 1106:
case 1250:
case 1045:
case 3677:
case 3548:
case 2379:
case 1829:
case 2897:
case 452:
case 3560:
case 3493:
case 2836:
case 3364:
case 610:
case 1285:
case 2401:
case 756:
case 165:
case 454:
case 3251:
case 1025:
case 1780:
case 1849:
case 1848:
case 3029:
case 839:
case 2055:
case 3845:
case 1717:
case 3419:
case 2842:
case 3914:
case 3052:
case 1061:
case 2269:
case 404:
case 815:
case 1937:
case 3742:
case 1023:
case 1413:
case 3289:
case 2553:
case 347:
case 3734:
case 1001:
case 1047:
case 3675:
case 763:
case 134:
case 3290:
case 471:
case 1453:
case 3892:
case 857:
case 811:
case 668:
case 2425:
case 3459:
case 520:
case 1757:
case 1631:
case 700:
case 2015:
case 2175:
case 1798:
case 750:
case 2893:
case 616:
case 3673:
case 3497:
case 3172:
case 1799:
case 161:
case 1455:
case 1800:
case 3481:
case 1679:
case 1970:
case 3793:
case 2013:
case 1678:
case 1202:
case 3031:
case 845:
case 1113:
case 3380:
case 3601:
case 3578:
case 3967:
case 3118:
case 2360:
case 2233:
case 983:
case 561:
case 2730:
case 3078:
case 1342:
case 1575:
case 4095:
case 1073:
case 1886:
case 2910:
case 2147:
case 2101:
case 640:
case 3531:
case 279:
case 3244:
case 3317:
case 72:
case 3625:
case 4042:
case 1395:
case 50:
case 305:
case 3181:
case 2950:
case 4034:
case 36:
case 2161:
case 2294:
case 374:
case 1393:
case 3159:
case 2125:
case 3623:
case 3122:
case 828:
case 4036:
case 1153:
case 3399:
case 1629:
case 3877:
case 841:
case 2300:
case 21:
case 3941:
case 3907:
case 3398:
case 55:
case 355:
case 2296:
case 2473:
case 1864:
case 973:
case 1343:
case 1615:
case 1239:
case 2031:
case 2380:
case 2118:
case 2601:
case 991:
case 2578:
case 3360:
case 432:
case 3991:
case 4027:
case 1072:
case 2579:
case 3348:
case 2119:
case 2246:
case 2079:
case 1271:
case 1112:
case 289:
case 3730:
case 367:
case 4092:
case 1613:
case 3147:
case 507:
case 2244:
case 379:
case 201:
case 242:
case 3619:
case 2317:
case 727:
case 2357:
case 3659:
case 1431:
case 4045:
case 3658:
case 1392:
case 2181:
case 3950:
case 621:
case 2472:
case 1653:
case 1129:
case 3475:
case 743:
case 3161:
case 1128:
case 3294:
case 2159:
case 2623:
case 995:
case 539:
case 2122:
case 3681:
case 1479:
case 3697:
case 102:
case 141:
case 2877:
case 1655:
case 515:
case 2907:
case 2661:
case 2398:
case 3473:
case 826:
case 212:
case 924:
case 1581:
case 3053:
case 3447:
case 3401:
case 1749:
case 865:
case 3384:
case 758:
case 2736:
case 437:
case 3743:
case 3555:
case 1022:
case 2029:
case 1221:
case 3055:
case 2845:
case 1522:
case 1097:
case 3268:
case 2419:
case 2366:
case 3842:
case 2914:
case 2028:
case 660:
case 3269:
case 85:
case 2288:
case 1081:
case 2289:
case 1330:
case 2734:
case 694:
case 666:
case 3209:
case 3895:
case 3513:
case 1926:
case 3672:
case 3208:
case 409:
case 2306:
case 157:
case 2892:
case 2422:
case 481:
case 1519:
case 223:
case 1518:
case 1018:
case 3461:
case 1452:
case 2172:
case 1019:
case 2497:
case 2956:
case 618:
case 2481:
case 1377:
case 2827:
case 459:
case 1898:
case 3013:
case 2793:
case 1387:
case 2936:
case 739:
case 617:
case 108:
case 3943:
case 3162:
case 3594:
case 1151:
case 715:
case 3096:
case 1960:
case 122:
case 1391:
case 1668:
case 1948:
case 2163:
case 4050:
case 2934:
case 3814:
case 856:
case 2714:
case 543:
case 642:
case 1446:
case 113:
case 850:
case 2602:
case 248:
case 2103:
case 2546:
case 3992:
case 707:
case 1538:
case 527:
case 2044:
case 3854:
case 1539:
case 4010:
case 674:
case 483:
case 1190:
case 66:
case 3374:
case 863:
case 2532:
case 1039:
case 2544:
case 3603:
case 2756:
case 757:
case 1038:
case 438:
case 2105:
case 3856:
case 1111:
case 2046:
case 1272:
case 4091:
case 1900:
case 1609:
case 2320:
case 612:
case 2887:
case 1219:
case 1146:
case 1635:
case 310:
case 253:
case 971:
case 2139:
case 1488:
case 1984:
case 3213:
case 3787:
case 993:
case 2138:
case 3671:
case 2463:
case 127:
case 93:
case 1633:
case 1144:
case 1505:
case 3008:
case 2482:
case 2090:
case 745:
case 1132:
case 1986:
case 3462:
case 2511:
case 2212:
case 3638:
case 3930:
case 294:
case 266:
case 2551:
case 3068:
case 1297:
case 1411:
case 728:
case 1565:
case 2229:
case 1021:
case 508:
case 3040:
case 2089:
case 2405:
case 2088:
case 3402:
case 2741:
case 3324:
case 1694:
case 316:
case 3253:
case 1082:
case 1563:
case 218:
case 558:
case 975:
case 3540:
case 3568:
case 1065:
case 2370:
case 1820:
case 1774:
case 143:
case 3807:
case 3569:
case 1644:
case 1440:
case 3011:
case 1468:
case 353:
case 550:
case 1632:
case 2509:
case 3139:
case 981:
case 3590:
case 3138:
case 2671:
case 3891:
case 662:
case 3482:
case 1135:
case 1646:
case 563:
case 2009:
case 1247:
case 2485:
case 2462:
case 2215:
case 720:
case 3810:
case 303:
case 500:
case 3465:
case 4054:
case 4014:
case 2069:
case 3551:
case 1083:
case 3252:
case 1194:
case 1876:
case 2068:
case 2040:
case 268:
case 3089:
case 1354:
case 2402:
case 937:
case 1874:
case 2324:
case 1720:
case 3588:
case 12:
case 3707:
case 3741:
case 4016:
case 3589:
case 2253:
case 1408:
case 985:
case 1904:
case 318:
case 2568:
case 2977:
case 1225:
case 2807:
case 1583:
case 1062:
case 3936:
case 3471:
case 808:
case 2943:
case 2162:
case 2594:
case 75:
case 4007:
case 1367:
case 3716:
case 822:
case 3182:
case 3163:
case 3934:
case 325:
case 2596:
case 495:
case 240:
case 765:
case 2094:
case 3685:
case 858:
case 3121:
case 1168:
case 813:
case 3995:
case 348:
case 3103:
case 2605:
case 2992:
case 3279:
case 3546:
case 1108:
case 2035:
case 3044:
case 321:
case 1109:
case 1496:
case 932:
case 1770:
case 2374:
case 163:
case 3532:
case 2102:
case 3544:
case 2603:
case 3105:
case 2535:
case 1999:
case 2856:
case 2033:
case 1275:
case 61:
case 1494:
case 1690:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743001201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,];
var gg_b = "1743001201/";

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
