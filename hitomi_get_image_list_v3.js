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
case 3646:
case 3077:
case 1302:
case 1425:
case 2755:
case 3300:
case 2833:
case 1416:
case 3911:
case 652:
case 759:
case 610:
case 1535:
case 621:
case 643:
case 175:
case 2834:
case 800:
case 1481:
case 20:
case 1089:
case 3417:
case 3890:
case 3543:
case 3237:
case 2644:
case 2734:
case 1158:
case 3167:
case 384:
case 3657:
case 3578:
case 1668:
case 771:
case 3979:
case 2983:
case 11:
case 3173:
case 3861:
case 1987:
case 3544:
case 796:
case 2733:
case 2643:
case 490:
case 1720:
case 1907:
case 2066:
case 2984:
case 2678:
case 1365:
case 2691:
case 1279:
case 9:
case 993:
case 827:
case 1937:
case 791:
case 2783:
case 2394:
case 2572:
case 2025:
case 3591:
case 776:
case 1787:
case 2489:
case 102:
case 2139:
case 3811:
case 4059:
case 4027:
case 2728:
case 970:
case 3448:
case 2409:
case 1562:
case 3467:
case 1707:
case 2393:
case 231:
case 1670:
case 3922:
case 3117:
case 648:
case 2884:
case 368:
case 1211:
case 1431:
case 613:
case 980:
case 3327:
case 555:
case 1807:
case 3359:
case 2476:
case 3396:
case 803:
case 988:
case 1101:
case 786:
case 1887:
case 309:
case 3013:
case 3879:
case 1466:
case 3706:
case 1286:
case 3961:
case 1332:
case 3052:
case 258:
case 2298:
case 3330:
case 85:
case 394:
case 250:
case 2000:
case 779:
case 1671:
case 317:
case 1645:
case 2636:
case 3426:
case 298:
case 2080:
case 3810:
case 4066:
case 89:
case 3843:
case 1812:
case 3235:
case 2363:
case 1853:
case 2256:
case 1348:
case 2857:
case 1367:
case 3358:
case 595:
case 2661:
case 730:
case 4031:
case 1985:
case 3844:
case 672:
case 264:
case 1854:
case 3991:
case 3744:
case 2424:
case 306:
case 682:
case 1754:
case 4058:
case 2533:
case 1619:
case 40:
case 1244:
case 3331:
case 3041:
case 861:
case 3254:
case 3522:
case 2729:
case 3960:
case 722:
case 942:
case 442:
case 1278:
case 3633:
case 3102:
case 2534:
case 1537:
case 3778:
case 3432:
case 2846:
case 3212:
case 1835:
case 453:
case 3366:
case 789:
case 54:
case 1130:
case 3482:
case 3944:
case 3262:
case 756:
case 3316:
case 1954:
case 458:
case 51:
case 3132:
case 1507:
case 3402:
case 950:
case 2528:
case 450:
case 2929:
case 3760:
case 2584:
case 1159:
case 3604:
case 1912:
case 3943:
case 1127:
case 2270:
case 912:
case 412:
case 1953:
case 3910:
case 88:
case 2503:
case 1821:
case 3684:
case 3301:
case 3628:
case 2438:
case 2772:
case 1669:
case 537:
case 2218:
case 799:
case 2872:
case 1008:
case 1935:
case 2946:
case 2451:
case 733:
case 1088:
case 87:
case 3221:
case 1395:
case 270:
case 1024:
case 2030:
case 3115:
case 2:
case 4016:
case 2340:
case 3197:
case 1862:
case 2352:
case 575:
case 347:
case 1698:
case 667:
case 3126:
case 1785:
case 1023:
case 293:
case 524:
case 3216:
case 2842:
case 1725:
case 2455:
case 3186:
case 2976:
case 1003:
case 1391:
case 3106:
case 4005:
case 1084:
case 1701:
case 161:
case 1693:
case 1028:
case 2007:
case 1004:
case 664:
case 272:
case 145:
case 344:
case 3201:
case 3895:
case 527:
case 2318:
case 2087:
case 3490:
case 3515:
case 2523:
case 3717:
case 3974:
case 1107:
case 3795:
case 1881:
case 3624:
case 921:
case 2104:
case 943:
case 1217:
case 1437:
case 3532:
case 741:
case 918:
case 55:
case 1187:
case 1530:
case 3321:
case 716:
case 1295:
case 1596:
case 2524:
case 855:
case 19:
case 2433:
case 2213:
case 229:
case 3623:
case 2103:
case 3967:
case 2909:
case 2750:
case 3948:
case 3549:
case 1559:
case 503:
case 1825:
case 3122:
case 2399:
case 2403:
case 2277:
case 3071:
case 2133:
case 2939:
case 4012:
case 1274:
case 2356:
case 1866:
case 3479:
case 2538:
case 500:
case 1055:
case 3335:
case 3258:
case 948:
case 426:
case 1248:
case 746:
case 1267:
case 2789:
case 1487:
case 17:
case 913:
case 205:
case 569:
case 1137:
case 711:
case 2092:
case 2134:
case 440:
case 3748:
case 1273:
case 3638:
case 2709:
case 3502:
case 2942:
case 688:
case 1500:
case 1831:
case 3190:
case 1925:
case 1858:
case 2347:
case 3565:
case 3848:
case 2037:
case 2809:
case 2776:
case 670:
case 166:
case 3411:
case 3873:
case 18:
case 732:
case 639:
case 1766:
case 1378:
case 2551:
case 2020:
case 693:
case 3353:
case 3486:
case 1033:
case 3266:
case 292:
case 1343:
case 3136:
case 2155:
case 4035:
case 1185:
case 749:
case 1297:
case 1830:
case 429:
case 3832:
case 2951:
case 1215:
case 1435:
case 2446:
case 566:
case 1379:
case 515:
case 653:
case 252:
case 1226:
case 2823:
case 2369:
case 1859:
case 2808:
case 482:
case 210:
case 982:
case 3849:
case 60:
case 3387:
case 218:
case 1516:
case 362:
case 885:
case 221:
case 243:
case 875:
case 3982:
case 100:
case 2695:
case 1454:
case 1980:
case 3227:
case 2788:
case 1249:
case 2550:
case 3902:
case 1614:
case 3296:
case 2429:
case 1900:
case 2708:
case 3443:
case 2085:
case 1412:
case 1386:
case 2723:
case 3410:
case 3230:
case 3897:
case 2398:
case 2005:
case 169:
case 2539:
case 3826:
case 1640:
case 57:
case 2589:
case 3491:
case 2924:
case 3200:
case 2674:
case 1046:
case 1282:
case 3567:
case 2035:
case 3865:
case 3110:
case 3548:
case 1336:
case 1959:
case 1112:
case 1927:
case 3460:
case 3949:
case 2371:
case 1153:
case 2157:
case 4037:
case 3392:
case 2129:
case 2923:
case 2851:
case 1361:
case 3932:
case 631:
case 1930:
case 3609:
case 2472:
case 2738:
case 2667:
case 1154:
case 4092:
case 3337:
case 1566:
case 3047:
case 3676:
case 405:
case 905:
case 612:
case 1421:
case 2751:
case 248:
case 3997:
case 2319:
case 802:
case 3915:
case 2054:
case 240:
case 2241:
case 1531:
case 3802:
case 545:
case 1322:
case 1135:
case 2146:
case 377:
case 3882:
case 2012:
case 719:
case 1418:
case 1238:
case 2689:
case 16:
case 186:
case 1658:
case 457:
case 957:
case 3648:
case 1875:
case 3472:
case 2609:
case 4019:
case 795:
case 2200:
case 2099:
case 3988:
case 2491:
case 2573:
case 538:
case 2280:
case 2143:
case 3908:
case 2949:
case 2865:
case 3035:
case 3345:
case 2056:
case 2765:
case 1078:
case 3576:
case 1199:
case 191:
case 694:
case 3012:
case 3053:
case 1333:
case 4071:
case 3146:
case 4045:
case 3751:
case 668:
case 326:
case 348:
case 2337:
case 1775:
case 2068:
case 313:
case 2915:
case 340:
case 3054:
case 2997:
case 3275:
case 1384:
case 1793:
case 2070:
case 2307:
case 3369:
case 71:
case 1328:
case 262:
case 343:
case 3293:
case 1681:
case 2387:
case 297:
case 3888:
case 3446:
case 3951:
case 2832:
case 1625:
case 2726:
case 1060:
case 1616:
case 3294:
case 737:
case 2230:
case 2595:
case 2517:
case 3723:
case 2191:
case 3938:
case 533:
case 2478:
case 3539:
case 2826:
case 504:
case 775:
case 2227:
case 3617:
case 1170:
case 684:
case 4069:
case 3172:
case 3724:
case 944:
case 3457:
case 444:
case 1447:
case 3542:
case 1468:
case 1288:
case 1513:
case 3021:
case 2902:
case 3550:
case 2296:
case 1224:
case 181:
case 1893:
case 1118:
case 1540:
case 1764:
case 3404:
case 4047:
case 828:
case 846:
case 104:
case 2258:
case 811:
case 3789:
case 2773:
case 3484:
case 1913:
case 199:
case 1952:
case 1119:
case 1061:
case 1940:
case 3134:
case 2767:
case 3950:
case 3277:
case 3682:
case 3403:
case 1680:
case 2774:
case 3399:
case 1777:
case 2479:
case 3538:
case 1914:
case 3483:
case 2045:
case 977:
case 477:
case 2071:
case 1600:
case 3939:
case 1541:
case 3020:
case 3551:
case 1877:
case 3665:
case 1575:
case 987:
case 1145:
case 2136:
case 1498:
case 3347:
case 435:
case 3368:
case 2867:
case 1357:
case 2565:
case 2651:
case 1864:
case 2231:
case 2411:
case 257:
case 832:
case 1372:
case 3839:
case 3370:
case 1814:
case 122:
case 2281:
case 3318:
case 3087:
case 2817:
case 244:
case 2186:
case 3976:
case 2436:
case 2216:
case 3842:
case 576:
case 807:
case 2106:
case 3697:
case 654:
case 3213:
case 1964:
case 1242:
case 2623:
case 2098:
case 3524:
case 3240:
case 2973:
case 1713:
case 179:
case 3632:
case 1006:
case 3742:
case 1752:
case 3750:
case 1963:
case 865:
case 606:
case 3128:
case 2624:
case 2795:
case 1169:
case 1696:
case 3184:
case 2688:
case 1239:
case 2974:
case 2717:
case 1977:
case 4018:
case 841:
case 497:
case 3104:
case 1659:
case 962:
case 3739:
case 3503:
case 1718:
case 549:
case 2943:
case 2604:
case 380:
case 3108:
case 3270:
case 2149:
case 132:
case 62:
case 1607:
case 715:
case 1770:
case 3188:
case 4052:
case 1097:
case 4013:
case 2603:
case 1015:
case 2262:
case 2944:
case 4040:
case 2316:
case 2760:
case 3957:
case 3123:
case 1947:
case 3584:
case 2683:
case 2325:
case 1026:
case 2094:
case 2465:
case 3352:
case 3606:
case 2197:
case 2115:
case 3030:
case 2891:
case 393:
case 247:
case 2511:
case 1194:
case 3946:
case 899:
case 120:
case 1870:
case 1441:
case 1956:
case 1339:
case 614:
case 3872:
case 833:
case 1598:
case 3611:
case 146:
case 370:
case 77:
case 1999:
case 1818:
case 838:
case 123:
case 141:
case 1571:
case 1493:
case 3661:
case 984:
case 3829:
case 3555:
case 1847:
case 2536:
case 2358:
case 1868:
case 1545:
case 116:
case 644:
case 2844:
case 165:
case 3364:
case 373:
case 1692:
case 364:
case 3151:
case 3377:
case 1494:
case 2655:
case 2426:
case 2235:
case 2843:
case 2590:
case 390:
case 1799:
case 2165:
case 254:
case 107:
case 1918:
case 4077:
case 2633:
case 3423:
case 4063:
case 1620:
case 3846:
case 889:
case 2778:
case 2366:
case 1856:
case 1970:
case 1257:
case 925:
case 3533:
case 3247:
case 3488:
case 3138:
case 3424:
case 3757:
case 963:
case 519:
case 3729:
case 1747:
case 2075:
case 2331:
case 2041:
case 1284:
case 3933:
case 1464:
case 635:
case 1228:
case 1114:
case 3489:
case 3269:
case 2591:
case 3784:
case 1204:
case 331:
case 3728:
case 507:
case 2467:
case 3409:
case 2195:
case 3016:
case 2886:
case 3703:
case 1463:
case 3934:
case 3142:
case 1113:
case 1152:
case 2474:
case 687:
case 3572:
case 1477:
case 727:
case 947:
case 3660:
case 3298:
case 2879:
case 2013:
case 209:
case 75:
case 677:
case 516:
case 2990:
case 2786:
case 1685:
case 3803:
case 3828:
case 312:
case 1971:
case 2014:
case 3884:
case 1621:
case 401:
case 703:
case 86:
case 2711:
case 1556:
case 406:
case 906:
case 859:
case 3546:
case 225:
case 881:
case 1073:
case 700:
case 697:
case 1819:
case 30:
case 662:
case 274:
case 1599:
case 3176:
case 1771:
case 1745:
case 2736:
case 1635:
case 2077:
case 2646:
case 528:
case 2822:
case 2063:
case 3245:
case 3833:
case 2911:
case 520:
case 1612:
case 896:
case 1177:
case 2220:
case 917:
case 2544:
case 1568:
case 1845:
case 3984:
case 1233:
case 1547:
case 3066:
case 2722:
case 3529:
case 3855:
case 1452:
case 3557:
case 1440:
case 3450:
case 1969:
case 336:
case 3644:
case 2148:
case 2510:
case 284:
case 1654:
case 2167:
case 3109:
case 2237:
case 1719:
case 2417:
case 3983:
case 43:
case 1351:
case 2173:
case 3189:
case 3031:
case 3375:
case 2629:
case 2657:
case 2578:
case 1497:
case 3592:
case 2799:
case 1165:
case 154:
case 949:
case 1235:
case 3812:
case 568:
case 1426:
case 560:
case 2141:
case 1844:
case 2692:
case 2847:
case 1536:
case 2545:
case 3905:
case 223:
case 2493:
case 241:
case 594:
case 622:
case 3520:
case 1331:
case 3244:
case 3962:
case 1041:
case 3459:
case 1960:
case 1522:
case 1449:
case 2768:
case 1744:
case 4048:
case 4067:
case 3496:
case 3754:
case 844:
case 106:
case 1432:
case 3243:
case 3537:
case 2856:
case 679:
case 2970:
case 1253:
case 1182:
case 3430:
case 3210:
case 3712:
case 3278:
case 1743:
case 1102:
case 207:
case 2918:
case 1683:
case 2569:
case 3762:
case 1325:
case 3507:
case 584:
case 1094:
case 1760:
case 2968:
case 2947:
case 1791:
case 3885:
case 1603:
case 1944:
case 1482:
case 3954:
case 1132:
case 3260:
case 2097:
case 1978:
case 1301:
case 1684:
case 2770:
case 1579:
case 1943:
case 3953:
case 633:
case 857:
case 1910:
case 2718:
case 2687:
case 2272:
case 211:
case 3088:
case 2818:
case 2598:
case 82:
case 3008:
case 2049:
case 1506:
case 3721:
case 220:
case 2441:
case 147:
case 1511:
case 1891:
case 2350:
case 1115:
case 3862:
case 419:
case 563:
case 1063:
case 3416:
case 2255:
case 3382:
case 3699:
case 1380:
case 2074:
case 2745:
case 2635:
case 3656:
case 907:
case 1300:
case 3820:
case 1986:
case 1064:
case 3481:
case 174:
case 2599:
case 3792:
case 163:
case 2998:
case 1790:
case 1906:
case 3401:
case 547:
case 2556:
case 2338:
case 2048:
case 2067:
case 659:
case 1657:
case 3737:
case 1578:
case 965:
case 465:
case 2234:
case 1979:
case 681:
case 2414:
case 1861:
case 3553:
case 423:
case 441:
case 1890:
case 3512:
case 1417:
case 3158:
case 862:
case 416:
case 1510:
case 1148:
case 184:
case 1495:
case 2654:
case 1167:
case 2163:
case 2969:
case 249:
case 2413:
case 1722:
case 3365:
case 2452:
case 3554:
case 4002:
case 337:
case 1544:
case 3987:
case 2653:
case 752:
case 3937:
case 2662:
case 3326:
case 2898:
case 2113:
case 219:
case 1474:
case 2152:
case 2919:
case 3397:
case 1886:
case 2140:
case 2518:
case 3315:
case 946:
case 928:
case 428:
case 446:
case 1467:
case 3562:
case 911:
case 2204:
case 713:
case 3670:
case 2228:
case 420:
case 1473:
case 1591:
case 2284:
case 4049:
case 1396:
case 517:
case 2095:
case 3887:
case 3101:
case 1014:
case 2621:
case 2945:
case 168:
case 3349:
case 432:
case 2971:
case 2869:
case 3807:
case 3181:
case 1327:
case 1786:
case 194:
case 887:
case 4026:
case 1990:
case 3286:
case 109:
case 1013:
case 2605:
case 1052:
case 3332:
case 1961:
case 53:
case 1040:
case 3050:
case 2499:
case 1797:
case 3105:
case 3581:
case 479:
case 514:
case 4006:
case 1715:
case 2091:
case 3226:
case 296:
case 4086:
case 3435:
case 3379:
case 2794:
case 3121:
case 197:
case 3516:
case 1018:
case 162:
case 3896:
case 884:
case 2681:
case 1307:
case 3859:
case 930:
case 3072:
case 2601:
case 2793:
case 271:
case 3614:
case 1902:
case 825:
case 281:
case 308:
case 2540:
case 3900:
case 3727:
case 1749:
case 2468:
case 2513:
case 3311:
case 3796:
case 3980:
case 922:
case 422:
case 1642:
case 1478:
case 369:
case 3613:
case 3652:
case 1191:
case 1650:
case 1160:
case 1815:
case 3232:
case 951:
case 3453:
case 1230:
case 1595:
case 1410:
case 489:
case 4079:
case 1110:
case 2355:
case 1865:
case 1548:
case 758:
case 1567:
case 1702:
case 456:
case 956:
case 3700:
case 3927:
case 3959:
case 750:
case 1573:
case 1491:
case 1782:
case 187:
case 3780:
case 4022:
case 2564:
case 2841:
case 3930:
case 2875:
case 3154:
case 1609:
case 334:
case 1392:
case 1574:
case 2168:
case 286:
case 2147:
case 303:
case 2563:
case 2238:
case 26:
case 4061:
case 1997:
case 499:
case 1915:
case 276:
case 1337:
case 3057:
case 3421:
case 2741:
case 1926:
case 2631:
case 2010:
case 3880:
case 4036:
case 2156:
case 3265:
case 2333:
case 327:
case 3322:
case 1765:
case 2078:
case 1802:
case 544:
case 2993:
case 3003:
case 3716:
case 3391:
case 1225:
case 2445:
case 2198:
case 1216:
case 2079:
case 3694:
case 2471:
case 2840:
case 3360:
case 345:
case 959:
case 459:
case 3781:
case 1201:
case 144:
case 665:
case 806:
case 981:
case 1515:
case 1490:
case 1817:
case 783:
case 623:
case 2814:
case 3084:
case 641:
case 3693:
case 577:
case 616:
case 2372:
case 2627:
case 587:
case 2659:
case 3437:
case 3217:
case 238:
case 2714:
case 3295:
case 971:
case 764:
case 1688:
case 2239:
case 773:
case 1974:
case 1717:
case 1624:
case 3881:
case 2696:
case 2740:
case 3958:
case 2630:
case 798:
case 1948:
case 1967:
case 3420:
case 1549:
case 817:
case 1422:
case 535:
case 3825:
case 3559:
case 2752:
case 1098:
case 1179:
case 3596:
case 854:
case 790:
case 1973:
case 607:
case 2964:
case 3816:
case 1623:
case 2600:
case 739:
case 1479:
case 3866:
case 2914:
case 4010:
case 3055:
case 7:
case 491:
case 2680:
case 793:
case 1774:
case 1122:
case 2763:
case 3120:
case 1995:
case 2940:
case 3758:
case 2289:
case 1767:
case 3407:
case 12:
case 3273:
case 778:
case 1258:
case 37:
case 1582:
case 1773:
case 3248:
case 2764:
case 632:
case 3580:
case 204:
case 3916:
case 1231:
case 157:
case 1411:
case 780:
case 1873:
case 1161:
case 46:
case 3192:
case 2357:
case 1848:
case 788:
case 1565:
case 2329:
case 1266:
case 1353:
case 2171:
case 1312:
case 2145:
case 3766:
case 2877:
case 2575:
case 2541:
case 2500:
case 3061:
case 3119:
case 3952:
case 2758:
case 1134:
case 2273:
case 1876:
case 2407:
case 3469:
case 105:
case 3764:
case 2137:
case 2487:
case 27:
case 1263:
case 2866:
case 3777:
case 1602:
case 839:
case 3600:
case 8:
case 1403:
case 1682:
case 893:
case 927:
case 427:
case 1399:
case 3498:
case 356:
case 3145:
case 4046:
case 3171:
case 2033:
case 2343:
case 1551:
case 518:
case 95:
case 1020:
case 3575:
case 3877:
case 2766:
case 2378:
case 28:
case 3276:
case 2034:
case 2916:
case 3864:
case 880:
case 2344:
case 1368:
case 215:
case 3329:
case 701:
case 1037:
case 1809:
case 434:
case 1776:
case 552:
case 888:
case 2925:
case 408:
case 1087:
case 706:
case 2004:
case 2781:
case 3372:
case 900:
case 3594:
case 400:
case 1839:
case 322:
case 2084:
case 3814:
case 2966:
case 1370:
case 655:
case 1697:
case 969:
case 2716:
case 2003:
case 1615:
case 526:
case 2391:
case 3840:
case 3593:
case 1976:
case 2360:
case 3079:
case 389:
case 3445:
case 3852:
case 1626:
case 540:
case 3006:
case 1742:
case 1508:
case 1632:
case 2559:
case 2527:
case 717:
case 2958:
case 3740:
case 1909:
case 1433:
case 2816:
case 129:
case 1588:
case 754:
case 1252:
case 1989:
case 2187:
case 2295:
case 2801:
case 3659:
case 3627:
case 2217:
case 2437:
case 182:
case 1128:
case 1214:
case 73:
case 330:
case 1434:
case 4072:
case 3011:
case 812:
case 3658:
case 3577:
case 2154:
case 1667:
case 4034:
case 3875:
case 768:
case 1648:
case 2361:
case 1851:
case 3470:
case 2390:
case 36:
case 3238:
case 3418:
case 1673:
case 3563:
case 1157:
case 1129:
case 203:
case 3147:
case 386:
case 2959:
case 2112:
case 2927:
case 709:
case 1371:
case 2153:
case 2046:
case 1509:
case 2282:
case 1035:
case 2336:
case 1345:
case 2558:
case 1674:
case 1988:
case 794:
case 25:
case 1589:
case 2663:
case 2996:
case 1924:
case 1012:
case 3043:
case 695:
case 3333:
case 1053:
case 2135:
case 4055:
case 3010:
case 2405:
case 391:
case 3993:
case 2800:
case 227:
case 3251:
case 1054:
case 3334:
case 140:
case 1241:
case 2421:
case 3741:
case 148:
case 126:
case 2057:
case 675:
case 2896:
case 1888:
case 784:
case 592:
case 3793:
case 371:
case 1369:
case 2525:
case 110:
case 3328:
case 2072:
case 3091:
case 3616:
case 3303:
case 396:
case 2226:
case 1823:
case 49:
case 3941:
case 3383:
case 3456:
case 3794:
case 3625:
case 2730:
case 4003:
case 3514:
case 2613:
case 1539:
case 505:
case 3223:
case 2306:
case 2162:
case 1398:
case 2412:
case 2727:
case 725:
case 3552:
case 4004:
case 3468:
case 1708:
case 1542:
case 61:
case 1550:
case 3540:
case 3893:
case 3224:
case 80:
case 774:
case 3208:
case 4084:
case 763:
case 2249:
case 2311:
case 4028:
case 1172:
case 2454:
case 1393:
case 131:
case 3204:
case 1784:
case 4088:
case 2670:
case 1001:
case 848:
case 826:
case 2458:
case 1728:
case 813:
case 2920:
case 2707:
case 3284:
case 1081:
case 634:
case 3228:
case 2618:
case 1269:
case 1489:
case 2326:
case 3203:
case 3662:
case 1572:
case 583:
case 1025:
case 1660:
case 3570:
case 4023:
case 3283:
case 3463:
case 777:
case 1703:
case 65:
case 3113:
case 1142:
case 3919:
case 3152:
case 3798:
case 150:
case 295:
case 3685:
case 3323:
case 2992:
case 1298:
case 2116:
case 2050:
case 627:
case 2101:
case 2887:
case 598:
case 3971:
case 2349:
case 112:
case 2505:
case 2039:
case 2181:
case 2807:
case 1884:
case 2211:
case 1955:
case 4051:
case 3819:
case 2089:
case 3073:
case 142:
case 275:
case 3599:
case 2481:
case 3338:
case 1058:
case 1546:
case 2837:
case 2290:
case 593:
case 224:
case 153:
case 2699:
case 1271:
case 3074:
case 2416:
case 2236:
case 2382:
case 578:
case 3255:
case 3771:
case 3635:
case 3745:
case 2302:
case 1755:
case 570:
case 1066:
case 455:
case 1984:
case 955:
case 1678:
case 3568:
case 349:
case 669:
case 3452:
case 580:
case 1855:
case 1529:
case 3163:
case 2720:
case 3612:
case 1643:
case 588:
case 1610:
case 2987:
case 3414:
case 608:
case 1341:
case 1983:
case 1189:
case 3351:
case 1375:
case 1219:
case 2668:
case 2737:
case 600:
case 1644:
case 1734:
case 2158:
case 2892:
case 1109:
case 3654:
case 843:
case 2512:
case 3719:
case 818:
case 3607:
case 2669:
case 2821:
case 188:
case 1188:
case 3770:
case 2159:
case 2912:
case 332:
case 1108:
case 2953:
case 180:
case 1929:
case 2400:
case 995:
case 3947:
case 2507:
case 1679:
case 2762:
case 2291:
case 536:
case 1528:
case 3026:
case 3097:
case 2130:
case 892:
case 2885:
case 2954:
case 1686:
case 2023:
case 193:
case 2862:
case 1352:
case 3032:
case 2705:
case 3342:
case 139:
case 1030:
case 3350:
case 1:
case 666:
case 805:
case 346:
case 1611:
case 328:
case 2024:
case 3999:
case 2317:
case 68:
case 311:
case 2935:
case 2721:
case 1946:
case 44:
case 1451:
case 3441:
case 3870:
case 320:
case 3339:
case 615:
case 402:
case 902:
case 2985:
case 4076:
case 365:
case 164:
case 645:
case 3141:
case 1690:
case 2905:
case 1661:
case 3571:
case 341:
case 550:
case 2348:
case 1555:
case 1857:
case 3309:
case 3868:
case 485:
case 2038:
case 2812:
case 1080:
case 512:
case 2374:
case 255:
case 2735:
case 1746:
case 2921:
case 937:
case 3494:
case 3756:
case 1377:
case 1299:
case 2430:
case 1972:
case 3620:
case 3065:
case 2243:
case 3970:
case 3856:
case 3899:
case 1534:
case 2100:
case 1423:
case 1729:
case 2459:
case 1757:
case 975:
case 4089:
case 2962:
case 2520:
case 924:
case 3257:
case 1268:
case 1488:
case 744:
case 1247:
case 1533:
case 4009:
case 872:
case 1424:
case 2754:
case 183:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1742796001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,];
var gg_b = "1742796001/";

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
