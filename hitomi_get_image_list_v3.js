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
case 2030:
case 1381:
case 1919:
case 1531:
case 3883:
case 2822:
case 808:
case 1115:
case 1038:
case 2641:
case 3092:
case 1142:
case 2693:
case 3243:
case 766:
case 265:
case 2303:
case 2100:
case 1010:
case 4021:
case 3324:
case 3311:
case 2939:
case 1813:
case 2524:
case 2018:
case 3954:
case 739:
case 2194:
case 3755:
case 2135:
case 555:
case 3185:
case 2150:
case 1170:
case 3871:
case 3553:
case 2780:
case 3730:
case 3990:
case 556:
case 2146:
case 2387:
case 3904:
case 2178:
case 1158:
case 550:
case 959:
case 1788:
case 2932:
case 2923:
case 3982:
case 947:
case 3099:
case 1149:
case 1744:
case 3807:
case 2829:
case 3718:
case 239:
case 2428:
case 1517:
case 1945:
case 1075:
case 3476:
case 2239:
case 3375:
case 2017:
case 214:
case 1414:
case 55:
case 1609:
case 1236:
case 3126:
case 511:
case 887:
case 791:
case 602:
case 1219:
case 3073:
case 3991:
case 2781:
case 1669:
case 2495:
case 3870:
case 3943:
case 2396:
case 475:
case 2434:
case 3596:
case 76:
case 2344:
case 1518:
case 3409:
case 714:
case 2679:
case 594:
case 179:
case 1885:
case 3808:
case 3717:
case 507:
case 1245:
case 2101:
case 3469:
case 470:
case 1684:
case 3310:
case 4020:
case 1212:
case 1024:
case 1011:
case 2656:
case 1157:
case 641:
case 1505:
case 3588:
case 3338:
case 3290:
case 3842:
case 1530:
case 2223:
case 3282:
case 3081:
case 1648:
case 1380:
case 2773:
case 1753:
case 2031:
case 2962:
case 3199:
case 2959:
case 876:
case 263:
case 3367:
case 368:
case 302:
case 2567:
case 2443:
case 2902:
case 3735:
case 2155:
case 2491:
case 154:
case 3529:
case 3794:
case 3934:
case 870:
case 3760:
case 2329:
case 5:
case 3697:
case 2050:
case 4074:
case 2571:
case 1551:
case 2853:
case 1873:
case 902:
case 1940:
case 1058:
case 1425:
case 429:
case 2887:
case 3837:
case 1110:
case 1497:
case 763:
case 1906:
case 1313:
case 1068:
case 227:
case 272:
case 2803:
case 2035:
case 1966:
case 1008:
case 2118:
case 2863:
case 2165:
case 2909:
case 487:
case 3927:
case 941:
case 2130:
case 2333:
case 2969:
case 1138:
case 3192:
case 2105:
case 3778:
case 2557:
case 1577:
case 3357:
case 974:
case 3416:
case 3342:
case 2888:
case 1892:
case 1256:
case 2276:
case 2489:
case 3439:
case 2947:
case 2515:
case 2454:
case 1623:
case 3181:
case 2248:
case 2131:
case 1880:
case 1385:
case 3308:
case 517:
case 881:
case 1535:
case 797:
case 2262:
case 2844:
case 1486:
case 1279:
case 2259:
case 3013:
case 1111:
case 2612:
case 2001:
case 2202:
case 3295:
case 1500:
case 1578:
case 3358:
case 612:
case 2209:
case 1137:
case 3026:
case 501:
case 408:
case 1546:
case 87:
case 1941:
case 1722:
case 2051:
case 659:
case 2252:
case 1993:
case 3875:
case 2490:
case 297:
case 12:
case 195:
case 204:
case 1206:
case 2404:
case 2549:
case 1899:
case 3349:
case 2482:
case 1067:
case 3701:
case 2703:
case 3925:
case 1666:
case 2414:
case 3711:
case 844:
case 779:
case 3129:
case 1216:
case 3355:
case 3440:
case 1017:
case 114:
case 634:
case 1781:
case 3850:
case 2652:
case 1396:
case 3846:
case 422:
case 477:
case 3087:
case 2609:
case 2219:
case 909:
case 3800:
case 886:
case 3003:
case 782:
case 2024:
case 2011:
case 3860:
case 2662:
case 1344:
case 2518:
case 1679:
case 2659:
case 398:
case 293:
case 643:
case 3133:
case 2183:
case 3122:
case 2648:
case 1223:
case 2753:
case 1232:
case 2380:
case 3365:
case 1177:
case 191:
case 3737:
case 3997:
case 2787:
case 998:
case 2392:
case 1388:
case 946:
case 492:
case 2038:
case 2142:
case 1005:
case 1641:
case 3628:
case 1030:
case 2531:
case 1065:
case 435:
case 88:
case 3044:
case 3225:
case 3775:
case 1135:
case 165:
case 1303:
case 340:
case 1100:
case 723:
case 1511:
case 1799:
case 1939:
case 166:
case 2158:
case 1792:
case 2170:
case 928:
case 3851:
case 345:
case 1780:
case 160:
case 121:
case 1146:
case 3096:
case 483:
case 2647:
case 2744:
case 2912:
case 384:
case 139:
case 2945:
case 3317:
case 223:
case 328:
case 767:
case 430:
case 3710:
case 1454:
case 869:
case 296:
case 3771:
case 3221:
case 3022:
case 2083:
case 3682:
case 1248:
case 2623:
case 1131:
case 640:
case 2240:
case 290:
case 2892:
case 3805:
case 1888:
case 3664:
case 1489:
case 1276:
case 1077:
case 883:
case 1515:
case 1284:
case 1568:
case 1202:
case 2500:
case 3335:
case 3419:
case 2535:
case 3360:
case 795:
case 830:
case 3394:
case 1844:
case 1061:
case 3707:
case 4043:
case 3436:
case 2560:
case 2486:
case 3346:
case 3412:
case 2941:
case 2722:
case 3445:
case 952:
case 3783:
case 2733:
case 510:
case 1558:
case 628:
case 3378:
case 1209:
case 48:
case 835:
case 1404:
case 1549:
case 2498:
case 1482:
case 232:
case 2266:
case 352:
case 3855:
case 295:
case 1117:
case 503:
case 3029:
case 3689:
case 2206:
case 1785:
case 334:
case 1443:
case 1902:
case 2175:
case 3817:
case 1507:
case 1962:
case 3768:
case 79:
case 1959:
case 2979:
case 163:
case 1567:
case 2058:
case 934:
case 4089:
case 2425:
case 1948:
case 226:
case 458:
case 3196:
case 748:
case 1046:
case 3351:
case 1853:
case 2551:
case 1571:
case 1035:
case 2561:
case 1060:
case 1094:
case 3144:
case 3361:
case 3749:
case 2068:
case 2313:
case 4082:
case 225:
case 127:
case 1803:
case 2501:
case 0:
case 3301:
case 943:
case 1000:
case 64:
case 3188:
case 2241:
case 2042:
case 2293:
case 1952:
case 2015:
case 1165:
case 720:
case 83:
case 1130:
case 2881:
case 698:
case 1583:
case 3831:
case 3220:
case 1333:
case 248:
case 4085:
case 1657:
case 3407:
case 2140:
case 2343:
case 3719:
case 2828:
case 1231:
case 987:
case 441:
case 3098:
case 3467:
case 3114:
case 2179:
case 1162:
case 2661:
case 525:
case 1325:
case 387:
case 1102:
case 2601:
case 2045:
case 2224:
case 2211:
case 2774:
case 676:
case 3613:
case 561:
case 3086:
case 1109:
case 2019:
case 618:
case 1930:
case 1764:
case 2172:
case 2651:
case 1671:
case 1782:
case 1169:
case 3253:
case 3988:
case 402:
case 331:
case 468:
case 1704:
case 3457:
case 1039:
case 2910:
case 1217:
case 21:
case 1016:
case 2422:
case 138:
case 2166:
case 2433:
case 931:
case 3944:
case 1918:
case 3712:
case 52:
case 595:
case 308:
case 1374:
case 1649:
case 715:
case 3554:
case 3589:
case 2911:
case 3339:
case 2389:
case 3442:
case 2725:
case 532:
case 3903:
case 4026:
case 2275:
case 2516:
case 3852:
case 1670:
case 908:
case 1147:
case 2646:
case 3468:
case 1386:
case 3809:
case 2827:
case 1536:
case 3408:
case 2600:
case 2895:
case 3470:
case 1545:
case 117:
case 2834:
case 703:
case 847:
case 2660:
case 3025:
case 3582:
case 973:
case 999:
case 3332:
case 590:
case 142:
case 4013:
case 3323:
case 3504:
case 3987:
case 1265:
case 812:
case 3876:
case 474:
case 2193:
case 2141:
case 1205:
case 2364:
case 3288:
case 2390:
case 523:
case 2617:
case 20:
case 1116:
case 1139:
case 2006:
case 3229:
case 1960:
case 1734:
case 3174:
case 1935:
case 662:
case 3740:
case 3186:
case 1009:
case 2136:
case 2547:
case 412:
case 1897:
case 3411:
case 1052:
case 2072:
case 1251:
case 2721:
case 1069:
case 37:
case 3437:
case 1261:
case 1062:
case 2949:
case 2112:
case 4080:
case 337:
case 2453:
case 3766:
case 2145:
case 1002:
case 1201:
case 97:
case 1950:
case 2843:
case 1541:
case 1946:
case 1076:
case 2056:
case 937:
case 2631:
case 1123:
case 3198:
case 3014:
case 2283:
case 1320:
case 3233:
case 1499:
case 2804:
case 1314:
case 3020:
case 3832:
case 3680:
case 2882:
case 1540:
case 687:
case 2093:
case 1951:
case 3692:
case 2041:
case 2864:
case 2242:
case 1638:
case 3376:
case 376:
case 1556:
case 2576:
case 868:
case 2334:
case 2907:
case 2268:
case 3534:
case 1200:
case 579:
case 593:
case 3302:
case 205:
case 107:
case 2208:
case 1235:
case 1294:
case 1579:
case 1260:
case 976:
case 2562:
case 2618:
case 1047:
case 3197:
case 975:
case 629:
case 2552:
case 2569:
case 2270:
case 1250:
case 841:
case 3741:
case 1278:
case 1886:
case 3527:
case 3309:
case 206:
case 2444:
case 1874:
case 2854:
case 1961:
case 375:
case 1566:
case 318:
case 213:
case 582:
case 3438:
case 15:
case 2889:
case 1389:
case 38:
case 1516:
case 597:
case 103:
case 2649:
case 419:
case 3336:
case 2536:
case 3460:
case 840:
case 3981:
case 98:
case 4029:
case 3435:
case 1678:
case 110:
case 669:
case 3872:
case 846:
case 2147:
case 742:
case 1660:
case 2218:
case 2608:
case 3478:
case 1600:
case 3450:
case 2545:
case 217:
case 115:
case 2512:
case 3312:
case 828:
case 635:
case 3128:
case 1193:
case 3043:
case 2642:
case 2205:
case 1364:
case 3973:
case 1238:
case 3840:
case 1523:
case 3598:
case 2814:
case 2821:
case 3280:
case 2398:
case 2230:
case 1382:
case 242:
case 2265:
case 2231:
case 2148:
case 2023:
case 3281:
case 2683:
case 3622:
case 3633:
case 2820:
case 809:
case 3004:
case 1786:
case 2657:
case 1677:
case 2176:
case 3841:
case 3090:
case 1140:
case 1828:
case 344:
case 3893:
case 1343:
case 3451:
case 1045:
case 2102:
case 1012:
case 1224:
case 1211:
case 2754:
case 2184:
case 753:
case 1661:
case 2789:
case 2162:
case 2426:
case 3999:
case 2325:
case 944:
case 3525:
case 933:
case 63:
case 3401:
case 3723:
case 2169:
case 3992:
case 3732:
case 2704:
case 898:
case 3461:
case 434:
case 677:
case 3980:
case 238:
case 1422:
case 1433:
case 1166:
case 253:
case 358:
case 1106:
case 1910:
case 3629:
case 563:
case 164:
case 11:
case 2540:
case 3028:
case 3191:
case 1041:
case 1864:
case 1890:
case 1576:
case 2556:
case 3926:
case 2499:
case 834:
case 3747:
case 711:
case 1882:
case 3514:
case 1967:
case 2235:
case 2294:
case 2579:
case 75:
case 1618:
case 1562:
case 1907:
case 1334:
case 1268:
case 2200:
case 3845:
case 1502:
case 644:
case 105:
case 633:
case 93:
case 2728:
case 2278:
case 3418:
case 3836:
case 1509:
case 1327:
case 2246:
case 2977:
case 1957:
case 1552:
case 977:
case 3372:
case 1569:
case 1270:
case 2492:
case 3405:
case 1655:
case 2675:
case 843:
case 2506:
case 3306:
case 3913:
case 794:
case 707:
case 4053:
case 2566:
case 3366:
case 113:
case 3784:
case 2734:
case 445:
case 755:
case 288:
case 3702:
case 539:
case 2935:
case 1066:
case 3985:
case 1908:
case 930:
case 369:
case 1617:
case 1006:
case 3762:
case 1207:
case 3189:
case 3759:
case 1547:
case 566:
case 428:
case 983:
case 1072:
case 68:
case 250:
case 1403:
case 2069:
case 3748:
case 3653:
case 560:
case 3776:
case 3027:
case 521:
case 256:
case 484:
case 1463:
case 1136:
case 3687:
case 1112:
case 2624:
case 3034:
case 1453:
case 335:
case 157:
case 2201:
case 2002:
case 3095:
case 671:
case 2062:
case 4088:
case 1949:
case 750:
case 3104:
case 2132:
case 1631:
case 935:
case 3182:
case 2048:
case 3769:
case 1283:
case 2978:
case 1958:
case 3752:
case 2320:
case 3417:
case 4044:
case 1891:
case 992:
case 1040:
case 2950:
case 2541:
case 446:
case 149:
case 1843:
case 852:
case 2277:
case 1257:
case 1056:
case 2727:
case 872:
case 3327:
case 3444:
case 827:
case 46:
case 4017:
case 1836:
case 2309:
case 2527:
case 306:
case 3258:
case 2922:
case 776:
case 1819:
case 2793:
case 2741:
case 3569:
case 2352:
case 61:
case 1372:
case 770:
case 3889:
case 651:
case 2438:
case 2816:
case 3655:
case 13:
case 218:
case 509:
case 900:
case 1430:
case 122:
case 177:
case 3249:
case 2699:
case 1465:
case 3854:
case 863:
case 1340:
case 1455:
case 3890:
case 2692:
case 3041:
case 1688:
case 3864:
case 3605:
case 1143:
case 3971:
case 1028:
case 3882:
case 54:
case 270:
case 2348:
case 2823:
case 2832:
case 3548:
case 3804:
case 889:
case 3618:
case 3562:
case 3559:
case 1644:
case 2362:
case 2125:
case 305:
case 3395:
case 2929:
case 3584:
case 2384:
case 3907:
case 4031:
case 3145:
case 1095:
case 2766:
case 237:
case 4030:
case 1213:
case 3112:
case 4005:
case 3079:
case 2437:
case 949:
case 540:
case 192:
case 957:
case 2772:
case 1752:
case 2014:
case 2021:
case 2222:
case 3283:
case 2681:
case 2198:
case 1182:
case 3631:
case 781:
case 1104:
case 3056:
case 3257:
case 1709:
case 349:
case 4018:
case 1393:
case 3328:
case 615:
case 1190:
case 678:
case 3908:
case 3267:
case 584:
case 1154:
case 1784:
case 2779:
case 2229:
case 1762:
case 77:
case 3006:
case 30:
case 528:
case 169:
case 2673:
case 130:
case 3271:
case 3072:
case 3547:
case 281:
case 136:
case 1226:
case 4055:
case 1027:
case 2756:
case 1776:
case 603:
case 2025:
case 821:
case 3635:
case 2458:
case 1879:
case 3660:
case 3694:
case 2244:
case 2862:
case 1446:
case 708:
case 762:
case 3834:
case 649:
case 315:
case 378:
case 2470:
case 299:
case 866:
case 3238:
case 4061:
case 1973:
case 1292:
case 1043:
case 1128:
case 2876:
case 1856:
case 3937:
case 3304:
case 839:
case 2987:
case 2449:
case 2504:
case 2323:
case 2332:
case 915:
case 2120:
case 3516:
case 2316:
case 2903:
case 18:
case 3389:
case 2339:
case 3911:
case 3539:
case 2554:
case 1574:
case 773:
case 799:
case 2963:
case 4051:
case 208:
case 262:
case 3678:
case 1435:
case 1319:
case 1586:
case 1460:
case 3827:
case 865:
case 2809:
case 1336:
case 404:
case 316:
case 3646:
case 2097:
case 3650:
case 1400:
case 2852:
case 1872:
case 903:
case 2869:
case 463:
case 351:
case 2847:
case 231:
case 1273:
case 2253:
case 2988:
case 180:
case 3798:
case 1723:
case 3938:
case 1401:
case 613:
case 3036:
case 489:
case 2086:
case 3237:
case 1127:
case 2074:
case 2483:
case 2745:
case 3422:
case 31:
case 364:
case 3910:
case 1089:
case 1477:
case 3106:
case 472:
case 1004:
case 814:
case 1633:
case 2121:
case 3343:
case 2591:
case 605:
case 3828:
case 1090:
case 3391:
case 2543:
case 1841:
case 4094:
case 3156:
case 3677:
case 3786:
case 4035:
case 1134:
case 3774:
case 3211:
case 3012:
case 1195:
case 1451:
case 185:
case 287:
case 1716:
case 1739:
case 1999:
case 3179:
case 1706:
case 4038:
case 3062:
case 1437:
case 3059:
case 642:
case 137:
case 235:
case 3611:
case 3624:
case 3727:
case 3277:
case 3946:
case 2709:
case 3541:
case 3950:
case 2190:
case 3593:
case 2341:
case 1528:
case 2752:
case 1233:
case 1772:
case 955:
case 4010:
case 3978:
case 2182:
case 3048:
case 1198:
case 3123:
case 3132:
case 1229:
case 792:
case 956:
case 3139:
case 896:
case 2431:
case 388:
case 2154:
case 1174:
case 3734:
case 3960:
case 2687:
case 1186:
case 4075:
case 2226:
case 2776:
case 2027:
case 547:
case 924:
case 1673:
case 230:
case 3251:
case 423:
case 1424:
case 181:
case 482:
case 311:
case 1410:
case 2696:
case 1197:
case 89:
case 825:
case 1309:
case 2418:
case 3886:
case 653:
case 2819:
case 1793:
case 95:
case 1741:
case 638:
case 118:
case 222:
case 3480:
case 175:
case 277:
case 1699:
case 2465:
case 3874:
case 2306:
case 848:
case 3506:
case 35:
case 4037:
case 2405:
case 1823:
case 2514:
case 1348:
case 170:
case 1680:
case 1832:
case 4024:
case 4011:
case 3499:
case 2926:
case 479:
case 176:
case 1376:
case 1475:
case 1692:
case 2028:
case 2143:
case 3540:
case 307:
case 1595:
case 2845:
case 1302:
case 826:
case 3200:
case 1929:
case 1534:
case 722:
case 2379:
case 1359:
case 3260:
case 1125:
case 3235:
case 2285:
case 3764:
case 2980:
case 3790:
case 1287:
case 3965:
case 1086:
case 2127:
case 454:
case 2461:
case 3704:
case 3397:
case 131:
case 1988:
case 3905:
case 2992:
case 938:
case 3671:
case 3152:
case 3016:
case 3217:
case 502:
case 129:
case 568:
case 4058:
case 9:
case 1457:
case 2477:
case 2054:
case 1074:
case 420:
case 258:
case 461:
case 353:
case 3667:
case 244:
case 786:
case 2064:
case 2841:
case 3176:
case 4008:
case 1736:
case 1996:
case 425:
case 780:
case 2004:
case 2633:
case 1114:
case 1121:
case 2622:
case 4068:
case 2082:
case 2281:
case 2525:
case 3325:
case 2716:
case 541:
case 1263:
case 733:
case 3102:
case 1471:
case 187:
case 1203:
case 2446:
case 2312:
case 3512:
case 3668:
case 2345:
case 1470:
case 2450:
case 1802:
case 1025:
case 1458:
case 1685:
case 3218:
case 2879:
case 78:
case 1862:
case 1244:
case 3398:
case 3230:
case 1323:
case 1848:
case 1332:
case 1288:
case 3642:
case 3205:
case 2292:
case 655:
case 2973:
case 2091:
case 1564:
case 2128:
case 1590:
case 1554:
case 901:
case 2299:
case 1963:
case 4071:
case 162:
case 1903:
case 28:
case 2806:
case 1339:
case 1589:
case 1468:
case 1097:
case 4067:
case 2872:
case 2400:
case 771:
case 2319:
case 3485:
case 4007:
case 3931:
case 688:
case 2981:
case 867:
case 42:
case 495:
case 1809:
case 3386:
case 2370:
case 3269:
case 1153:
case 2173:
case 639:
case 1346:
case 403:
case 2227:
case 1757:
case 2777:
case 2686:
case 857:
case 3209:
case 3619:
case 1378:
case 2358:
case 3558:
case 152:
case 58:
case 2423:
case 2349:
case 3404:
case 3549:
case 1689:
case 660:
case 304:
case 3117:
case 397:
case 3490:
case 2698:
case 2181:
case 1221:
case 2751:
case 1604:
case 3515:
case 3077:
case 3726:
case 1664:
case 2342:
case 1805:
case 2416:
case 3542:
case 665:
case 1103:
case 3202:
case 3612:
case 2013:
case 2368:
case 3284:
case 3259:
case 1436:
case 1707:
case 3262:
case 3844:
case 1585:
case 274:
case 1144:
case 3060:
case 3863:
case 2085:
case 3035:
case 2625:
case 3803:
case 327:
case 702:
case 1513:
case 691:
case 813:
case 3557:
case 2228:
case 3969:
case 4012:
case 2383:
case 2750:
case 544:
case 1220:
case 2533:
case 927:
case 2180:
case 1831:
case 972:
case 2522:
case 3130:
case 2927:
case 4045:
case 3507:
case 3984:
case 2529:
case 2307:
case 2934:
case 3491:
case 1817:
case 558:
case 533:
case 2735:
case 4036:
case 3785:
case 741:
case 363:
case 1768:
case 464:
case 41:
case 1715:
case 3948:
case 1742:
case 580:
case 1914:
case 3571:
case 3853:
case 66:
case 586:
case 2697:
case 3046:
case 2310:
case 1634:
case 2469:
case 1003:
case 1800:
case 2452:
case 1472:
case 3101:
case 851:
case 1835:
case 1318:
case 1063:
case 3161:
case 4041:
case 2204:
case 3232:
case 3031:
case 1298:
case 3223:
case 1122:
case 14:
case 1305:
case 2264:
case 2290:
case 2588:
case 1997:
case 3656:
case 2815:
case 400:
case 2849:
case 1599:
case 1711:
case 1724:
case 3017:
case 36:
case 2375:
case 577:
case 3216:
case 2289:
case 2476:
case 1129:
case 2596:
case 413:
case 1846:
case 3396:
case 2870:
case 3781:
case 1053:
case 2991:
case 1878:
case 2858:
case 96:
case 2126:
case 1479:
case 1286:
case 1087:
case 1998:
case 3923:
case 2982:
case 2705:
case 3792:
case 3178:
case 878:
case 2337:
case 3387:
case 366:
case 815:
case 2765:
case 1297:
case 4066:
case 3146:
case 1096:
case 360:
case 145:
case 247:
case 2964:
case 604:
case 3150:
case 259:
case 583:
case 339:
case 3428:
case 3829:
case 2718:
case 966:
case 2807:
case 4072:
case 921:
case 2099:
case 960:
case 128:
case 569:
case 3693:
case 2243:
case 1088:
case 2092:
case 2291:
case 1877:
case 803:
case 2883:
case 3822:
case 1581:
case 2620:
case 3833:
case 965:
case 2185:
case 1775:
case 4056:
case 3194:
case 1044:
case 2954:
case 3018:
case 1974:
case 146:
case 3363:
case 712:
case 3524:
case 3511:
case 2311:
case 2447:
case 816:
case 1801:
case 592:
case 948:
case 2301:
case 325:
case 4032:
case 3068:
case 3313:
case 3497:
case 2361:
case 734:
case 3008:
case 811:
case 587:
case 1625:
case 1750:
case 2770:
case 2831:
case 693:
case 1533:
case 1927:
case 85:
case 1746:
case 1357:
case 3015:
case 3577:
case 2758:
case 3293:
case 2691:
case 2188:
case 3241:
case 1192:
case 3042:
case 168:
case 1700:
case 2768:
case 1199:
case 3049:
case 926:
case 4:
case 354:
case 1995:
case 234:
case 3873:
case 3551:
case 1371:
case 2351:
case 1697:
case 2196:
case 3956:
case 361:
case 326:
case 894:
case 2715:
case 4016:
case 3425:
case 2742:
case 3058:
case 2914:
case 682:
case 1026:
case 1777:
case 2757:
case 3137:
case 855:
case 2920:
case 3578:
case 92:
case 995:
case 623:
case 3071:
case 3993:
case 3272:
case 3733:
case 3722:
case 1370:
case 3941:
case 2153:
case 2412:
case 3639:
case 3007:
case 219:
case 395:
case 3616:
case 1875:
case 1701:
case 3067:
case 3498:
case 401:
case 1349:
case 2654:
case 1674:
case 888:
case 1439:
case 1315:
case 2664:
case 3240:
case 390:
case 2690:
case 1838:
case 667:
case 3632:
case 3880:
case 2830:
case 2214:
case 2022:
case 1751:
case 2033:
case 2771:
case 3474:
case 824:
case 2604:
case 2865:
case 3560:
case 719:
case 3486:
case 3594:
case 2585:
case 174:
case 2419:
case 3385:
case 573:
case 2335:
case 599:
case 2103:
case 3500:
case 2300:
case 1295:
case 3124:
case 752:
case 996:
case 1234:
case 1013:
case 488:
case 1765:
case 2096:
case 1730:
case 3373:
case 2573:
case 62:
case 695:
case 923:
case 2851:
case 1982:
case 2738:
case 3788:
case 1705:
case 3158:
case 424:
case 1587:
case 3826:
case 2710:
case 450:
case 1099:
case 740:
case 112:
case 1867:
case 228:
case 3420:
case 323:
case 2441:
case 456:
case 159:
case 746:
case 2493:
case 1718:
case 745:
case 2986:
case 2581:
case 1883:
case 1620:
case 2331:
case 3381:
case 4059:
case 2628:
case 1291:
case 1092:
case 3038:
case 1857:
case 4048:
case 1324:
case 728:
case 3010:
case 1503:
case 690:
case 2801:
case 367:
case 3108:
case 2775:
case 2225:
case 784:
case 246:
case 648:
case 1717:
case 3885:
case 379:
case 1409:
case 1544:
case 3662:
case 3011:
case 3024:
case 2634:
case 1113:
case 1868:
case 3684:
case 1452:
case 2305:
case 1842:
case 570:
case 1290:
case 2592:
case 3787:
case 838:
case 2997:
case 3157:
case 494:
case 576:
case 1204:
case 3565:
case 3380:
case 3648:
case 1081:
case 1282:
case 2330:
case 1621:
case 2466:
case 2580:
case 620:
case 518:
case 1375:
case 575:
case 2456:
case 798:
case 2274:
case 2599:
case 4047:
case 3414:
case 382:
case 1858:
case 2878:
case 1462:
case 74:
case 1126:
case 1459:
case 2087:
case 45:
case 1596:
case 3171:
case 1870:
case 2850:
case 1402:
case 1991:
case 1073:
case 2053:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756548001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,];
var gg_b = "1756548001/";

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
