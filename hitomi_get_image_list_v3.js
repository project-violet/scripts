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
case 886:
case 573:
case 507:
case 2974:
case 3131:
case 3632:
case 2482:
case 3606:
case 62:
case 242:
case 3363:
case 1603:
case 458:
case 3911:
case 3288:
case 3718:
case 310:
case 4034:
case 1557:
case 3525:
case 812:
case 2289:
case 3720:
case 1205:
case 2719:
case 3276:
case 3852:
case 3249:
case 447:
case 235:
case 229:
case 1401:
case 1179:
case 2572:
case 2248:
case 2660:
case 801:
case 1058:
case 779:
case 2183:
case 3959:
case 1707:
case 3176:
case 1940:
case 911:
case 2056:
case 2189:
case 2847:
case 3953:
case 1582:
case 1173:
case 1250:
case 1390:
case 181:
case 1337:
case 902:
case 2713:
case 993:
case 2148:
case 3080:
case 219:
case 1279:
case 3887:
case 3044:
case 3231:
case 1472:
case 1609:
case 2368:
case 644:
case 3369:
case 956:
case 1984:
case 598:
case 3645:
case 2457:
case 1507:
case 207:
case 3227:
case 1386:
case 1100:
case 3836:
case 172:
case 2045:
case 2823:
case 1451:
case 2513:
case 2644:
case 1093:
case 3802:
case 2993:
case 3909:
case 3096:
case 1008:
case 1424:
case 493:
case 402:
case 4082:
case 1841:
case 2269:
case 535:
case 3656:
case 1321:
case 3268:
case 1653:
case 2331:
case 3871:
case 3867:
case 1659:
case 3416:
case 553:
case 2524:
case 4057:
case 2551:
case 2263:
case 1194:
case 3791:
case 2169:
case 519:
case 2006:
case 3903:
case 1155:
case 2064:
case 596:
case 1112:
case 394:
case 713:
case 1757:
case 325:
case 3998:
case 2349:
case 1964:
case 3127:
case 958:
case 2376:
case 680:
case 1932:
case 76:
case 791:
case 2829:
case 1022:
case 1839:
case 3017:
case 3828:
case 759:
case 2388:
case 248:
case 2863:
case 176:
case 667:
case 2422:
case 3271:
case 741:
case 3744:
case 3267:
case 1141:
case 31:
case 2214:
case 1406:
case 481:
case 3498:
case 344:
case 2499:
case 363:
case 2315:
case 2545:
case 2352:
case 2292:
case 1133:
case 2740:
case 1007:
case 2756:
case 406:
case 3601:
case 3596:
case 1913:
case 1377:
case 997:
case 620:
case 3585:
case 1361:
case 1812:
case 3020:
case 783:
case 3930:
case 908:
case 1855:
case 2223:
case 2387:
case 2564:
case 2192:
case 871:
case 2532:
case 2129:
case 3517:
case 158:
case 3128:
case 1522:
case 1241:
case 1924:
case 3409:
case 3171:
case 3672:
case 592:
case 577:
case 503:
case 147:
case 1894:
case 2625:
case 1062:
case 589:
case 1445:
case 2114:
case 4058:
case 3935:
case 2957:
case 3025:
case 548:
case 380:
case 2706:
case 1057:
case 882:
case 1846:
case 717:
case 3115:
case 2732:
case 1558:
case 1326:
case 3624:
case 178:
case 2883:
case 899:
case 246:
case 2336:
case 1972:
case 639:
case 625:
case 1574:
case 3760:
case 1697:
case 1381:
case 816:
case 964:
case 557:
case 1456:
case 3619:
case 408:
case 1630:
case 3091:
case 23:
case 3459:
case 497:
case 472:
case 2458:
case 3613:
case 3314:
case 4008:
case 760:
case 68:
case 3329:
case 727:
case 981:
case 2540:
case 3888:
case 292:
case 1873:
case 203:
case 111:
case 3942:
case 3252:
case 3187:
case 952:
case 3215:
case 1793:
case 2700:
case 3853:
case 1589:
case 113:
case 1840:
case 212:
case 1856:
case 2182:
case 2681:
case 695:
case 708:
case 2330:
case 1548:
case 191:
case 1318:
case 983:
case 3641:
case 835:
case 16:
case 3987:
case 201:
case 624:
case 159:
case 1763:
case 286:
case 417:
case 965:
case 1602:
case 1101:
case 1479:
case 3704:
case 3766:
case 1636:
case 1884:
case 3443:
case 588:
case 3334:
case 636:
case 2874:
case 3521:
case 1201:
case 249:
case 2448:
case 2638:
case 2489:
case 3476:
case 3135:
case 2712:
case 3061:
case 2157:
case 2550:
case 3737:
case 2316:
case 797:
case 2858:
case 3915:
case 2579:
case 3952:
case 3586:
case 3307:
case 1667:
case 1583:
case 1671:
case 3721:
case 1615:
case 706:
case 1151:
case 1652:
case 960:
case 2677:
case 2661:
case 4083:
case 2162:
case 1400:
case 873:
case 384:
case 3130:
case 3803:
case 2555:
case 1092:
case 2342:
case 2750:
case 1864:
case 1806:
case 441:
case 2746:
case 3875:
case 3898:
case 1119:
case 2039:
case 1832:
case 830:
case 3910:
case 3216:
case 3786:
case 3778:
case 2463:
case 3590:
case 288:
case 3795:
case 1213:
case 332:
case 1029:
case 2822:
case 2469:
case 1023:
case 187:
case 2923:
case 1494:
case 3230:
case 3357:
case 2335:
case 2808:
case 3116:
case 638:
case 917:
case 465:
case 1325:
case 1563:
case 1687:
case 1391:
case 483:
case 1941:
case 4089:
case 1224:
case 3566:
case 409:
case 3427:
case 2262:
case 3081:
case 743:
case 764:
case 4048:
case 3103:
case 1955:
case 127:
case 2199:
case 516:
case 702:
case 1912:
case 314:
case 793:
case 1380:
case 857:
case 3175:
case 3761:
case 1819:
case 3198:
case 1245:
case 1106:
case 3777:
case 34:
case 3538:
case 1441:
case 3090:
case 3209:
case 2654:
case 2539:
case 2621:
case 2208:
case 756:
case 1824:
case 582:
case 1851:
case 2686:
case 3679:
case 3436:
case 3968:
case 160:
case 3650:
case 1433:
case 2094:
case 3428:
case 3066:
case 3004:
case 2541:
case 4047:
case 2429:
case 2311:
case 491:
case 46:
case 3374:
case 1688:
case 2492:
case 459:
case 1676:
case 1264:
case 2807:
case 1145:
case 1900:
case 979:
case 324:
case 117:
case 526:
case 271:
case 2108:
case 1813:
case 3109:
case 2193:
case 3816:
case 3467:
case 987:
case 216:
case 2741:
case 2274:
case 487:
case 3415:
case 1801:
case 3211:
case 747:
case 1184:
case 479:
case 165:
case 83:
case 3726:
case 183:
case 1317:
case 2073:
case 96:
case 991:
case 2733:
case 3153:
case 1905:
case 3270:
case 2005:
case 1156:
case 1089:
case 959:
case 2882:
case 3322:
case 3988:
case 1973:
case 2666:
case 3842:
case 251:
case 913:
case 3399:
case 2604:
case 109:
case 2948:
case 2258:
case 2398:
case 2375:
case 846:
case 758:
case 3949:
case 3308:
case 1950:
case 390:
case 3943:
case 877:
case 3253:
case 3694:
case 803:
case 2309:
case 3170:
case 2050:
case 1668:
case 3577:
case 632:
case 1240:
case 3095:
case 3738:
case 684:
case 4014:
case 1729:
case 2079:
case 2739:
case 3086:
case 3159:
case 923:
case 2983:
case 4092:
case 2690:
case 141:
case 226:
case 645:
case 3931:
case 3021:
case 1627:
case 2637:
case 3111:
case 2447:
case 3612:
case 3553:
case 1147:
case 2082:
case 1889:
case 3261:
case 3277:
case 1540:
case 177:
case 666:
case 103:
case 919:
case 1556:
case 1982:
case 3339:
case 1848:
case 547:
case 953:
case 2708:
case 3042:
case 2793:
case 3465:
case 256:
case 2616:
case 1458:
case 841:
case 4045:
case 996:
case 1371:
case 3607:
case 942:
case 2574:
case 4064:
case 3991:
case 1620:
case 1618:
case 865:
case 1302:
case 929:
case 1957:
case 2799:
case 2850:
case 576:
case 3177:
case 2484:
case 3925:
case 2057:
case 3798:
case 1247:
case 3570:
case 1732:
case 1072:
case 2879:
case 3634:
case 809:
case 2326:
case 278:
case 3878:
case 3559:
case 1336:
case 2972:
case 604:
case 593:
case 2241:
case 2924:
case 1051:
case 1493:
case 3485:
case 3496:
case 2951:
case 1408:
case 511:
case 247:
case 435:
case 429:
case 2894:
case 3281:
case 2062:
case 3711:
case 2635:
case 2445:
case 1114:
case 1019:
case 2812:
case 556:
case 1564:
case 998:
case 1506:
case 3030:
case 3770:
case 782:
case 2919:
case 1532:
case 3097:
case 3138:
case 799:
case 258:
case 2522:
case 2139:
case 2800:
case 827:
case 3753:
case 1545:
case 3126:
case 2133:
case 1352:
case 930:
case 1292:
case 157:
case 2007:
case 2239:
case 2508:
case 3238:
case 1013:
case 3460:
case 1229:
case 148:
case 276:
case 4056:
case 453:
case 2432:
case 4040:
case 2141:
case 3866:
case 2464:
case 1214:
case 2406:
case 3181:
case 3682:
case 419:
case 1064:
case 3137:
case 2112:
case 3098:
case 3075:
case 2611:
case 2200:
case 712:
case 304:
case 2964:
case 1349:
case 506:
case 3003:
case 208:
case 1376:
case 2022:
case 1829:
case 1922:
case 701:
case 1665:
case 1032:
case 2839:
case 43:
case 3674:
case 198:
case 3190:
case 879:
case 3960:
case 786:
case 2659:
case 3266:
case 1263:
case 552:
case 2534:
case 2413:
case 2194:
case 2562:
case 581:
case 1407:
case 1814:
case 1169:
case 1680:
case 1163:
case 749:
case 3166:
case 492:
case 1701:
case 3881:
case 2321:
case 3418:
case 2354:
case 1331:
case 2507:
case 4001:
case 3826:
case 2945:
case 2833:
case 107:
case 2386:
case 2100:
case 3379:
case 722:
case 2782:
case 2212:
case 2395:
case 2255:
case 272:
case 1823:
case 3237:
case 1045:
case 3742:
case 130:
case 1434:
case 1513:
case 1343:
case 3996:
case 2093:
case 3985:
case 3346:
case 543:
case 366:
case 2472:
case 1685:
case 3394:
case 196:
case 662:
case 206:
case 457:
case 3944:
case 1501:
case 3425:
case 508:
case 1457:
case 2707:
case 2940:
case 2246:
case 448:
case 1847:
case 2105:
case 1189:
case 823:
case 2582:
case 989:
case 252:
case 1040:
case 2250:
case 3491:
case 2390:
case 2173:
case 3542:
case 3278:
case 281:
case 1713:
case 1283:
case 3295:
case 2279:
case 119:
case 1327:
case 3716:
case 2150:
case 2273:
case 813:
case 3070:
case 3730:
case 4024:
case 2205:
case 3861:
case 946:
case 3059:
case 3186:
case 891:
case 2401:
case 2179:
case 1248:
case 3195:
case 859:
case 1183:
case 3121:
case 3965:
case 4019:
case 368:
case 1974:
case 2074:
case 572:
case 2734:
case 2675:
case 3011:
case 142:
case 243:
case 3699:
case 2603:
case 2304:
case 264:
case 3244:
case 3767:
case 1174:
case 1690:
case 126:
case 2627:
case 4039:
case 3891:
case 2284:
case 488:
case 2950:
case 2396:
case 802:
case 3043:
case 2385:
case 2792:
case 670:
case 3515:
case 2729:
case 3280:
case 1079:
case 1739:
case 3728:
case 3995:
case 337:
case 283:
case 1733:
case 3332:
case 1989:
case 2905:
case 2156:
case 2089:
case 1005:
case 901:
case 3736:
case 2723:
case 2973:
case 1666:
case 1604:
case 1948:
case 209:
case 655:
case 134:
case 1258:
case 199:
case 3180:
case 1375:
case 3306:
case 3663:
case 3587:
case 527:
case 37:
case 1274:
case 2801:
case 3265:
case 3461:
case 986:
case 3477:
case 265:
case 2264:
case 1533:
case 2747:
case 1000:
case 305:
case 1299:
case 541:
case 2523:
case 128:
case 1108:
case 1193:
case 3217:
case 2439:
case 3904:
case 3966:
case 2365:
case 1492:
case 401:
case 422:
case 3384:
case 3683:
case 583:
case 2824:
case 2851:
case 1686:
case 1834:
case 2994:
case 3426:
case 260:
case 3068:
case 1969:
case 2344:
case 1094:
case 3818:
case 3027:
case 2955:
case 2912:
case 2819:
case 1012:
case 792:
case 777:
case 3820:
case 2164:
case 2106:
case 988:
case 3752:
case 3340:
case 650:
case 1293:
case 3715:
case 3510:
case 2529:
case 2631:
case 1122:
case 565:
case 1539:
case 3296:
case 1621:
case 118:
case 3990:
case 3528:
case 1208:
case 2687:
case 2251:
case 2391:
case 30:
case 523:
case 4005:
case 2224:
case 451:
case 742:
case 67:
case 2455:
case 499:
case 3437:
case 1500:
case 1705:
case 2219:
case 3220:
case 2789:
case 3776:
case 2845:
case 3926:
case 2023:
case 928:
case 3036:
case 3218:
case 1033:
case 1923:
case 3372:
case 3896:
case 2113:
case 1808:
case 3749:
case 1512:
case 753:
case 3743:
case 2092:
case 1992:
case 3527:
case 897:
case 2119:
case 426:
case 3120:
case 1039:
case 2832:
case 1779:
case 1929:
case 3938:
case 3404:
case 333:
case 3466:
case 3028:
case 1463:
case 600:
case 3010:
case 1822:
case 4046:
case 2124:
case 3731:
case 2151:
case 2652:
case 1134:
case 1677:
case 591:
case 56:
case 1594:
case 1661:
case 3301:
case 559:
case 1914:
case 1282:
case 707:
case 1157:
case 773:
case 1755:
case 3614:
case 3313:
case 1550:
case 3977:
case 1858:
case 1579:
case 730:
case 4094:
case 3052:
case 2172:
case 2671:
case 2201:
case 149:
case 3531:
case 3629:
case 806:
case 2610:
case 587:
case 4012:
case 1638:
case 3692:
case 2473:
case 2769:
case 579:
case 3478:
case 2763:
case 3495:
case 2602:
case 2101:
case 3486:
case 4000:
case 3623:
case 916:
case 2884:
case 2636:
case 2446:
case 471:
case 65:
case 3291:
case 864:
case 1626:
case 3351:
case 1700:
case 375:
case 3225:
case 934:
case 951:
case 112:
case 2047:
case 1397:
case 1681:
case 2272:
case 1330:
case 3087:
case 2318:
case 982:
case 3421:
case 2320:
case 2820:
case 1761:
case 1198:
case 3164:
case 57:
case 932:
case 3106:
case 3592:
case 3955:
case 2818:
case 2937:
case 114:
case 1897:
case 623:
case 14:
case 2340:
case 1538:
case 1090:
case 3132:
case 2715:
case 1209:
case 3631:
case 984:
case 2510:
case 1679:
case 1402:
case 4077:
case 2683:
case 2567:
case 3824:
case 360:
case 1650:
case 3514:
case 3994:
case 3069:
case 1646:
case 136:
case 25:
case 2904:
case 500:
case 2260:
case 1066:
case 1004:
case 2689:
case 1605:
case 3365:
case 1374:
case 1673:
case 3688:
case 205:
case 1203:
case 317:
case 3523:
case 691:
case 3145:
case 3900:
case 1275:
case 831:
case 1298:
case 3747:
case 1358:
case 1471:
case 2185:
case 440:
case 1816:
case 2787:
case 2196:
case 27:
case 3801:
case 4026:
case 72:
case 365:
case 1781:
case 2461:
case 2477:
case 3184:
case 49:
case 3156:
case 679:
case 1322:
case 2736:
case 138:
case 2076:
case 3973:
case 1726:
case 874:
case 1976:
case 3140:
case 2088:
case 3547:
case 3905:
case 2332:
case 2306:
case 687:
case 2587:
case 2364:
case 2663:
case 2049:
case 1399:
case 2702:
case 3946:
case 2825:
case 3385:
case 1694:
case 200:
case 3668:
case 1577:
case 3792:
case 1308:
case 3950:
case 785:
case 3256:
case 3872:
case 445:
case 2728:
case 2978:
case 237:
case 1159:
case 1086:
case 2552:
case 2986:
case 1095:
case 1738:
case 3083:
case 1078:
case 2710:
case 2280:
case 341:
case 1021:
case 2165:
case 2767:
case 484:
case 1487:
case 744:
case 3714:
case 1655:
case 3284:
case 1111:
case 2891:
case 2588:
case 725:
case 3047:
case 3856:
case 2225:
case 4066:
case 3589:
case 617:
case 2549:
case 2319:
case 2880:
case 359:
case 1431:
case 3272:
case 2087:
case 1142:
case 3318:
case 1641:
case 36:
case 3479:
case 3101:
case 495:
case 3763:
case 570:
case 868:
case 1334:
case 2351:
case 3636:
case 3884:
case 533:
case 2531:
case 2629:
case 1449:
case 555:
case 1521:
case 2865:
case 3405:
case 1476:
case 2191:
case 3473:
case 44:
case 4090:
case 2961:
case 1061:
case 1077:
case 2614:
case 1790:
case 1578:
case 1859:
case 3667:
case 3583:
case 3172:
case 2015:
case 3671:
case 436:
case 1586:
case 990:
case 627:
case 2071:
case 1754:
case 3652:
case 2067:
case 1967:
case 3124:
case 1721:
case 575:
case 3569:
case 767:
case 4078:
case 720:
case 1875:
case 3119:
case 184:
case 2743:
case 270:
case 1537:
case 1778:
case 1795:
case 1197:
case 866:
case 2010:
case 3939:
case 3832:
case 1216:
case 2404:
case 1786:
case 2028:
case 233:
case 2466:
case 2788:
case 1936:
case 1230:
case 3219:
case 2776:
case 3845:
case 2749:
case 1809:
case 2885:
case 379:
case 924:
case 3325:
case 1297:
case 3748:
case 2896:
case 1902:
case 683:
case 438:
case 19:
case 3224:
case 2490:
case 2647:
case 3455:
case 2981:
case 420:
case 2804:
case 11:
case 2866:
case 2417:
case 606:
case 163:
case 98:
case 4080:
case 1475:
case 1498:
case 2682:
case 3007:
case 2753:
case 681:
case 2126:
case 9:
case 3133:
case 1916:
case 1585:
case 1601:
case 3239:
case 915:
case 1102:
case 3913:
case 4065:
case 1018:
case 1827:
case 3233:
case 2575:
case 2598:
case 3919:
case 1236:
case 3599:
case 2918:
case 2503:
case 1128:
case 2759:
case 3522:
case 939:
case 925:
case 3139:
case 3758:
case 2097:
case 2138:
case 1517:
case 2496:
case 3951:
case 869:
case 3241:
case 3774:
case 3924:
case 2485:
case 1171:
case 1560:
case 1409:
case 1672:
case 410:
case 2281:
case 3062:
case 3635:
case 1868:
case 3484:
case 2177:
case 2662:
case 2925:
case 3846:
case 2161:
case 3799:
case 795:
case 608:
case 1323:
case 1624:
case 378:
case 3722:
case 3879:
case 2333:
case 910:
case 1717:
case 3326:
case 1287:
case 1831:
case 425:
case 3574:
case 2821:
case 1760:
case 2480:
case 3381:
case 1565:
case 3630:
case 2511:
case 4017:
case 1091:
case 3440:
case 3456:
case 1619:
case 3901:
case 1613:
case 967:
case 531:
case 356:
case 4085:
case 4:
case 3873:
case 2339:
case 1411:
case 3082:
case 2553:
case 1876:
case 3338:
case 2277:
case 672:
case 1849:
case 1187:
case 1215:
case 3793:
case 1580:
case 2465:
case 1942:
case 3708:
case 1442:
case 3074:
case 761:
case 79:
case 2622:
case 2965:
case 647:
case 4020:
case 3366:
case 343:
case 364:
case 3762:
case 2011:
case 1606:
case 1664:
case 1591:
case 1525:
case 1720:
case 1276:
case 2877:
case 1288:
case 110:
case 3150:
case 42:
case 2535:
case 3557:
case 3058:
case 2178:
case 2195:
case 1959:
case 980:
case 2059:
case 3179:
case 3582:
case 41:
case 1243:
case 352:
case 3173:
case 120:
case 1176:
case 732:
case 463:
case 2980:
case 2286:
case 1149:
case 2278:
case 3337:
case 1080:
case 2608:
case 1369:
case 1044:
case 3609:
case 2254:
case 2693:
case 2394:
case 485:
case 745:
case 1645:
case 2425:
case 676:
case 167:
case 3782:
case 1836:
case 372:
case 1383:
case 1684:
case 2237:
case 3945:
case 3386:
case 1227:
case 3833:
case 115:
case 3100:
case 2379:
case 870:
case 1909:
case 1096:
case 266:
case 3008:
case 2516:
case 3424:
case 3451:
case 2290:
case 693:
case 2742:
case 1:
case 1085:
case 2009:
case 2996:
case 985:
case 963:
case 18:
case 2104:
case 3841:
case 2166:
case 944:
case 2418:
case 1268:
case 91:
case 3294:
case 1430:
case 3419:
case 2420:
case 1656:
case 3321:
case 3413:
case 3534:
case 2658:
case 80:
case 480:
case 1867:
case 1416:
case 2204:
case 2266:
case 4025:
case 3670:
case 92:
case 1975:
case 125:
case 1998:
case 204:
case 621:
case 0:
case 678:
case 1127:
case 3906:
case 2003:
case 1518:
case 855:
case 3155:
case 2137:
case 2098:
case 4091:
case 2597:
case 1828:
case 2373:
case 2838:
case 308:
case 2917:
case 3932:
case 3022:
case 29:
case 2566:
case 261:
case 1490:
case 3234:
case 10:
case 768:
case 4088:
case 1647:
case 95:
case 616:
case 1981:
case 1218:
case 3033:
case 2026:
case 3923:
case 1372:
case 2230:
case 3500:
case 1220:
case 894:
case 3107:
case 2116:
case 1749:
case 1885:
case 905:
case 2809:
case 1002:
case 2297:
case 3335:
case 2902:
case 3808:
case 3207:
case 3992:
case 1527:
case 3746:
case 1120:
case 284:
case 1743:
case 1118:
case 3555:
case 170:
case 3750:
case 4031:
case 2590:
case 2778:
case 2928:
case 232:
case 540:
case 1010:
case 2197:
case 2382:
case 2910:
case 3779:
case 3929:
case 2786:
case 2216:
case 1938:
case 1404:
case 88:
case 400:
case 2754:
case 1067:
case 245:
case 3914:
case 1568:
case 3661:
case 3162:
case 59:
case 3316:
case 1977:
case 1125:
case 3546:
case 2870:
case 1961:
case 3282:
case 2135:
case 3755:
case 1313:
case 3550:
case 2737:
case 2242:
case 2790:
case 2595:
case 1052:
case 2859:
case 900:
case 2307:
case 3448:
case 2554:
case 3638:
case 2449:
case 4027:
case 1865:
case 3489:
case 2488:
case 1692:
case 1768:
case 1191:
case 1486:
case 405:
case 3483:
case 1495:
case 386:
case 584:
case 2362:
case 532:
case 240:
case 3626:
case 1623:
case 1588:
case 3573:
case 3182:
case 2235:
case 3397:
case 3681:
case 3700:
case 1225:
case 810:
case 1549:
case 1421:
case 1880:
case 2431:
case 3330:
case 1454:
case 2142:
case 2641:
case 326:
case 1954:
case 1031:
case 1244:
case 3174:
case 3690:
case 3637:
case 2655:
case 2111:
case 2612:
case 3447:
case 1891:
case 1043:
case 1825:
case 2561:
case 4067:
case 688:
case 3050:
case 100:
case 2577:
case 2308:
case 3046:
case 3739:
case 1728:
case 2086:
case 950:
case 1552:
case 2078:
case 1345:
case 1515:
case 3158:
case 1710:
case 2988:
case 238:
case 1076:
case 3073:
case 731:
case 3989:
case 40:
case 3258:
case 3398:
case 1306:
case 1364:
case 2949:
case 1663:
case 1049:
case 2842:
case 351:
case 536:
case 3604:
case 3303:
case 2259:
case 2399:
case 1702:
case 334:
case 3274:
case 2415:
case 1144:
case 1265:
case 4036:
case 455:
case 4002:
case 2600:
case 2781:
case 1461:
case 1477:
case 3299:
case 774:
case 295:
case 2358:
case 2471:
case 2109:
case 3370:
case 612:
case 2816:
case 1787:
case 1217:
case 955:
case 1904:
case 3541:
case 1260:
case 3311:
case 3429:
case 475:
case 3963:
case 2428:
case 2004:
case 590:
case 2605:
case 4087:
case 2374:
case 90:
case 81:
case 2679:
case 2402:
case 3695:
case 1683:
case 1426:
case 2650:
case 3969:
case 3094:
case 863:
case 649:
case 3862:
case 2175:
case 1481:
case 2037:
case 1818:
case 1027:
case 933:
case 3199:
case 214:
case 3539:
case 3621:
case 318:
case 1990:
case 1752:
case 2538:
case 1340:
case 24:
case 622:
case 1117:
case 3654:
case 1285:
case 1715:
case 2209:
case 1510:
case 225:
case 3519:
case 3892:
case 3006:
case 2518:
case 3999:
case 1137:
case 1735:
case 1098:
case 3922:
case 3772:
case 2017:
case 2828:
case 1838:
case 567:
case 2389:
case 1305:
case 3829:
case 2810:
case 3263:
case 520:
case 63:
case 89:
case 2060:
case 861:
case 1658:
case 1960:
case 474:
case 2867:
case 1266:
case 3407:
case 3814:
case 3169:
case 2168:
case 1166:
case 2497:
case 3163:
case 510:
case 2640:
case 845:
case 2268:
case 4042:
case 1881:
case 1420:
case 3462:
case 2383:
case 2684:
case 3823:
case 3045:
case 1379:
case 2909:
case 2096:
case 1985:
case 692:
case 1516:
case 1742:
case 1350:
case 3434:
case 2:
case 1009:
case 1996:
case 1608:
case 539:
case 525:
case 3696:
case 2369:
case 1944:
case 3685:
case 1693:
case 3368:
case 396:
case 2645:
case 3457:
case 1425:
case 267:
case 1053:
case 2243:
case 2176:
case 3847:
case 2953:
case 3189:
case 319:
case 1980:
case 1286:
case 657:
case 2887:
case 2149:
case 1542:
case 1278:
case 3283:
case 1355:
case 733:
case 3148:
case 1312:
case 462:
case 2525:
case 2276:
case 58:
case 1877:
case 2718:
case 1730:
case 2143:
case 3248:
case 3660:
case 1178:
case 3183:
case 1186:
case 1059:
case 2852:
case 2249:
case 3958:
case 2815:
case 974:
case 335:
case 3751:
case 2442:
case 2131:
case 1154:
case 2632:
case 515:
case 1121:
case 431:
case 1622:
case 454:
case 3724:
case 1699:
case 3482:
case 342:
case 2591:
case 5:
case 2664:
case 2363:
case 392:
case 1339:
case 2411:
case 890:
case 1553:
case 52:
case 3745:
case 2392:
case 2252:
case 3474:
case 1042:
case 2785:
case 1709:
case 2215:
case 2580:
case 2942:
case 2544:
case 2613:
case 2314:
case 2459:
case 1607:
case 2470:
case 2831:
case 1854:
case 4003:
case 75:
case 769:
case 585:
case 1821:
case 2760:
case 2565:
case 1480:
case 1511:
case 3618:
case 968:
case 3620:
case 51:
case 698:
case 1925:
case 1662:
case 1798:
case 1035:
case 838:
case 1570:
case 174:
case 2935:
case 3302:
case 1703:
case 1878:
case 2624:
case 2323:
case 3883:
case 2115:
case 3072:
case 1444:
case 2152:
case 1634:
case 1496:
case 77:
case 3024:
case 22:
case 642:
case 2167:
case 3051:
case 1485:
case 1657:
case 1711:
case 3114:
case 2868:
case 3962:
case 3625:
case 1226:
case 3387:
case 3691:
case 2018:
case 1575:
case 1770:
case 1920:
case 1598:
case 154:
case 3019:
case 468:
case 2930:
case 635:
case 629:
case 895:
case 3223:
case 1837:
case 1890:
case 1759:
case 904:
case 1097:
case 3129:
case 2110:
case 1138:
case 4011:
case 966:
case 285:
case 814:
case 3545:
case 1126:
case 3740:
case 3352:
case 1238:
case 3013:
case 737:
case 2585:
case 2780:
case 84:
case 1016:
case 2271:
case 4053:
case 2267:
case 348:
case 244:
case 2403:
case 3499:
case 263:
case 3214:
case 1181:
case 2498:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1755306002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,];
var gg_b = "1755306002/";

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
