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
case 945:
case 3805:
case 1683:
case 3475:
case 1793:
case 1529:
case 3001:
case 2872:
case 1816:
case 2543:
case 81:
case 1810:
case 366:
case 973:
case 3536:
case 2497:
case 2529:
case 3530:
case 2979:
case 3090:
case 2683:
case 19:
case 1543:
case 2810:
case 1237:
case 1402:
case 617:
case 949:
case 21:
case 3440:
case 1022:
case 350:
case 3446:
case 2293:
case 1330:
case 1179:
case 1457:
case 2465:
case 1886:
case 1433:
case 267:
case 670:
case 1465:
case 3329:
case 2330:
case 2336:
case 2886:
case 1293:
case 3421:
case 3969:
case 1047:
case 11:
case 588:
case 780:
case 3004:
case 652:
case 2433:
case 2737:
case 1533:
case 1908:
case 3256:
case 3250:
case 2222:
case 1247:
case 456:
case 903:
case 3125:
case 387:
case 3174:
case 340:
case 437:
case 2964:
case 2565:
case 1557:
case 1161:
case 792:
case 1009:
case 2247:
case 1222:
case 736:
case 974:
case 2093:
case 642:
case 2533:
case 3796:
case 1565:
case 2557:
case 3397:
case 1662:
case 47:
case 3521:
case 3971:
case 1324:
case 3813:
case 1108:
case 3768:
case 4061:
case 1053:
case 3290:
case 2747:
case 1722:
case 1278:
case 600:
case 955:
case 3925:
case 3575:
case 1037:
case 1597:
case 286:
case 1429:
case 2722:
case 1502:
case 2108:
case 3883:
case 1605:
case 3616:
case 2597:
case 2961:
case 186:
case 3357:
case 3610:
case 3704:
case 3201:
case 3171:
case 153:
case 1744:
case 2220:
case 3252:
case 3306:
case 751:
case 844:
case 1315:
case 3354:
case 2660:
case 2155:
case 3403:
case 3707:
case 1551:
case 415:
case 499:
case 3542:
case 2288:
case 3792:
case 4095:
case 2241:
case 253:
case 3984:
case 805:
case 3499:
case 3148:
case 3527:
case 431:
case 1288:
case 2315:
case 2658:
case 3114:
case 1660:
case 3391:
case 1594:
case 1726:
case 3981:
case 2244:
case 105:
case 3292:
case 2506:
case 244:
case 1698:
case 2955:
case 419:
case 3676:
case 1218:
case 483:
case 1506:
case 3023:
case 205:
case 1741:
case 3739:
case 3184:
case 3177:
case 2788:
case 3948:
case 853:
case 3351:
case 2967:
case 1955:
case 3207:
case 2031:
case 1491:
case 168:
case 2303:
case 1044:
case 540:
case 2919:
case 1399:
case 611:
case 3663:
case 2870:
case 2189:
case 254:
case 2406:
case 3007:
case 2231:
case 1919:
case 3559:
case 279:
case 2399:
case 2044:
case 268:
case 3635:
case 1303:
case 2018:
case 1870:
case 1400:
case 1876:
case 154:
case 1406:
case 875:
case 3898:
case 1882:
case 1332:
case 3503:
case 3938:
case 2494:
case 618:
case 1451:
case 1359:
case 825:
case 3866:
case 484:
case 1088:
case 3749:
case 2845:
case 2989:
case 1234:
case 1119:
case 275:
case 3723:
case 129:
case 4089:
case 3052:
case 2451:
case 868:
case 2731:
case 502:
case 1989:
case 3485:
case 639:
case 1673:
case 2306:
case 604:
case 1984:
case 3226:
case 1682:
case 59:
case 1527:
case 1148:
case 1499:
case 3995:
case 1391:
case 2707:
case 2403:
case 1239:
case 309:
case 3241:
case 1181:
case 795:
case 3718:
case 1707:
case 3658:
case 2114:
case 2391:
case 1354:
case 3167:
case 2527:
case 2977:
case 2148:
case 1645:
case 673:
case 833:
case 344:
case 4014:
case 3500:
case 1752:
case 567:
case 1739:
case 3741:
case 2981:
case 2676:
case 2670:
case 1459:
case 1207:
case 1612:
case 952:
case 1914:
case 1515:
case 3955:
case 2394:
case 2111:
case 305:
case 2023:
case 3720:
case 288:
case 2184:
case 233:
case 1981:
case 2752:
case 799:
case 1292:
case 3591:
case 3967:
case 2351:
case 1394:
case 1111:
case 3031:
case 2612:
case 4081:
case 1670:
case 3788:
case 451:
case 970:
case 1559:
case 3919:
case 834:
case 942:
case 3454:
case 1635:
case 674:
case 1092:
case 354:
case 3734:
case 3400:
case 3870:
case 2007:
case 2635:
case 1138:
case 368:
case 2415:
case 2092:
case 3399:
case 463:
case 3044:
case 1007:
case 1663:
case 2442:
case 1723:
case 3119:
case 1599:
case 586:
case 2749:
case 2866:
case 2860:
case 2052:
case 3882:
case 3332:
case 3359:
case 2427:
case 375:
case 3026:
case 3020:
case 2039:
case 655:
case 1866:
case 343:
case 4038:
case 1749:
case 3731:
case 222:
case 480:
case 1530:
case 39:
case 1169:
case 330:
case 3709:
case 3872:
case 2001:
case 3237:
case 1475:
case 1805:
case 2169:
case 1424:
case 3529:
case 2530:
case 3793:
case 122:
case 746:
case 1001:
case 872:
case 632:
case 509:
case 166:
case 696:
case 1050:
case 2068:
case 3293:
case 1056:
case 70:
case 1329:
case 31:
case 866:
case 3047:
case 250:
case 4069:
case 544:
case 1440:
case 3336:
case 3753:
case 3457:
case 3179:
case 3880:
case 3330:
case 2050:
case 2056:
case 3828:
case 3737:
case 1862:
case 616:
case 3222:
case 2187:
case 1680:
case 1796:
case 1268:
case 554:
case 412:
case 3662:
case 1397:
case 2701:
case 3565:
case 935:
case 525:
case 240:
case 3375:
case 2546:
case 1971:
case 1250:
case 998:
case 1256:
case 72:
case 1302:
case 3533:
case 3247:
case 1187:
case 1174:
case 187:
case 2813:
case 1125:
case 2521:
case 911:
case 579:
case 802:
case 2397:
case 1204:
case 3747:
case 3443:
case 887:
case 840:
case 77:
case 3605:
case 1883:
case 2768:
case 102:
case 2290:
case 2296:
case 1704:
case 1430:
case 2117:
case 3164:
case 1357:
case 1610:
case 1436:
case 1616:
case 529:
case 3346:
case 1290:
case 68:
case 1296:
case 2756:
case 2333:
case 3108:
case 561:
case 3722:
case 4074:
case 4025:
case 3321:
case 4087:
case 1524:
case 991:
case 575:
case 3429:
case 2610:
case 2704:
case 2616:
case 3597:
case 2436:
case 762:
case 1275:
case 3043:
case 800:
case 2740:
case 1721:
case 3980:
case 2608:
case 1105:
case 3765:
case 142:
case 2501:
case 1590:
case 3116:
case 1596:
case 3368:
case 2347:
case 1869:
case 3304:
case 1608:
case 427:
case 2721:
case 503:
case 1746:
case 2224:
case 2322:
case 1347:
case 3029:
case 2030:
case 3202:
case 3356:
case 2590:
case 2664:
case 3617:
case 3733:
case 2221:
case 2724:
case 3879:
case 3409:
case 3186:
case 477:
case 3301:
case 1504:
case 4005:
case 2568:
case 1556:
case 686:
case 200:
case 3493:
case 555:
case 2246:
case 490:
case 1221:
case 3522:
case 1378:
case 2162:
case 1568:
case 2550:
case 3396:
case 2556:
case 524:
case 1337:
case 2468:
case 3743:
case 2040:
case 16:
case 120:
case 981:
case 1730:
case 504:
case 2113:
case 1825:
case 1046:
case 573:
case 2021:
case 1040:
case 1468:
case 2337:
case 1679:
case 2736:
case 3729:
case 1113:
case 332:
case 2404:
case 2730:
case 2874:
case 3033:
case 396:
case 523:
case 3669:
case 2183:
case 3478:
case 988:
case 61:
case 3229:
case 2230:
case 3002:
case 2913:
case 1393:
case 1024:
case 3243:
case 820:
case 817:
case 3097:
case 2490:
case 3537:
case 2496:
case 1913:
case 3553:
case 706:
case 297:
case 2393:
case 1309:
case 86:
case 2817:
case 3864:
case 549:
case 1439:
case 625:
case 1027:
case 298:
case 1331:
case 1881:
case 3349:
case 3094:
case 1732:
case 2848:
case 654:
case 2299:
case 1759:
case 211:
case 135:
case 3867:
case 668:
case 2331:
case 2027:
case 3426:
case 1042:
case 2619:
case 679:
case 2759:
case 111:
case 3855:
case 235:
case 3323:
case 3488:
case 359:
case 940:
case 303:
case 1848:
case 408:
case 713:
case 2203:
case 4073:
case 785:
case 218:
case 2884:
case 1492:
case 3006:
case 2877:
case 139:
case 1811:
case 1973:
case 3091:
case 2492:
case 1549:
case 3531:
case 1884:
case 1334:
case 3418:
case 675:
case 3444:
case 661:
case 3895:
case 239:
case 191:
case 355:
case 2523:
case 58:
case 2689:
case 1877:
case 1232:
case 304:
case 3291:
case 4066:
case 3794:
case 421:
case 1388:
case 3684:
case 1423:
case 1785:
case 2341:
case 1326:
case 1059:
case 1966:
case 2449:
case 2958:
case 1960:
case 1032:
case 653:
case 345:
case 2727:
case 2838:
case 2388:
case 3751:
case 922:
case 1215:
case 3254:
case 532:
case 3352:
case 3206:
case 2592:
case 3431:
case 1958:
case 2960:
case 3518:
case 469:
case 373:
case 3339:
case 3544:
case 3945:
case 3251:
case 1715:
case 644:
case 2227:
case 794:
case 1344:
case 3648:
case 1539:
case 3541:
case 2285:
case 2158:
case 3614:
case 3434:
case 2242:
case 349:
case 605:
case 950:
case 471:
case 2715:
case 3819:
case 3294:
case 2552:
case 2318:
case 1667:
case 1158:
case 2655:
case 1998:
case 465:
case 3145:
case 3976:
case 3520:
case 2539:
case 3970:
case 274:
case 4063:
case 1051:
case 2094:
case 1420:
case 2441:
case 3042:
case 1426:
case 493:
case 159:
case 3814:
case 311:
case 1963:
case 3848:
case 855:
case 3027:
case 3619:
case 3452:
case 1349:
case 3331:
case 1534:
case 1935:
case 2963:
case 259:
case 335:
case 2323:
case 1867:
case 2855:
case 3173:
case 203:
case 3085:
case 1638:
case 3884:
case 3334:
case 318:
case 1531:
case 3549:
case 124:
case 500:
case 1444:
case 413:
case 155:
case 2006:
case 1163:
case 634:
case 3407:
case 859:
case 3492:
case 224:
case 1054:
case 1135:
case 2418:
case 2163:
case 3811:
case 339:
case 2684:
case 1254:
case 3958:
case 1518:
case 1431:
case 3198:
case 1611:
case 1200:
case 1206:
case 1352:
case 1945:
case 1544:
case 1339:
case 1889:
case 2677:
case 1794:
case 2751:
case 104:
case 520:
case 3727:
case 1684:
case 3838:
case 1982:
case 3059:
case 3326:
case 3320:
case 56:
case 3785:
case 2170:
case 2339:
case 1677:
case 2200:
case 2206:
case 3032:
case 3966:
case 2431:
case 681:
case 570:
case 1681:
case 1588:
case 4070:
case 2251:
case 1294:
case 2307:
case 2614:
case 3667:
case 3003:
case 1970:
case 1520:
case 1976:
case 2648:
case 1145:
case 223:
case 3285:
case 1307:
case 3715:
case 2791:
case 597:
case 4012:
case 91:
case 633:
case 688:
case 3242:
case 2588:
case 1182:
case 123:
case 1541:
case 2970:
case 3539:
case 2976:
case 1648:
case 3552:
case 967:
case 414:
case 2392:
case 721:
case 3166:
case 3655:
case 1614:
case 3318:
case 968:
case 3501:
case 1304:
case 1757:
case 2765:
case 3746:
case 2986:
case 2671:
case 687:
case 3347:
case 1437:
case 1733:
case 2368:
case 1356:
case 2116:
case 73:
case 7:
case 1029:
case 790:
case 1980:
case 4028:
case 925:
case 3224:
case 2453:
case 2304:
case 1297:
case 954:
case 2029:
case 3962:
case 3030:
case 2617:
case 88:
case 1110:
case 2437:
case 2733:
case 2202:
case 3590:
case 2172:
case 777:
case 1671:
case 1928:
case 2257:
case 18:
case 1493:
case 3221:
case 4072:
case 3724:
case 1687:
case 2879:
case 2128:
case 2547:
case 727:
case 961:
case 1972:
case 3661:
case 2910:
case 2233:
case 426:
case 1186:
case 1409:
case 539:
case 3240:
case 3246:
case 4010:
case 602:
case 2265:
case 462:
case 3162:
case 1702:
case 1233:
case 2390:
case 3550:
case 2972:
case 1547:
case 406:
case 3983:
case 909:
case 2447:
case 953:
case 1422:
case 3679:
case 622:
case 2065:
case 1033:
case 132:
case 1729:
case 3113:
case 1593:
case 2509:
case 3456:
case 3450:
case 3337:
case 36:
case 816:
case 2422:
case 1509:
case 296:
case 320:
case 3353:
case 3825:
case 2593:
case 2669:
case 3183:
case 2808:
case 1243:
case 3024:
case 3075:
case 1097:
case 782:
case 3401:
case 1553:
case 3913:
case 116:
case 370:
case 944:
case 3496:
case 672:
case 2243:
case 896:
case 1478:
case 1808:
case 1669:
case 2864:
case 3817:
case 3393:
case 2553:
case 397:
case 1002:
case 1229:
case 1016:
case 377:
case 2129:
case 126:
case 3471:
case 636:
case 1143:
case 876:
case 2408:
case 3:
case 1072:
case 33:
case 226:
case 2464:
case 1129:
case 3713:
case 3417:
case 3637:
case 48:
case 2016:
case 2010:
case 262:
case 3653:
case 984:
case 3896:
case 85:
case 3890:
case 3213:
case 2461:
case 3930:
case 2929:
case 15:
case 1028:
case 2369:
case 1080:
case 612:
case 176:
case 1369:
case 3425:
case 2028:
case 1461:
case 1579:
case 327:
case 1847:
case 2080:
case 3856:
case 826:
case 2772:
case 2228:
case 1604:
case 3308:
case 528:
case 1710:
case 1716:
case 1902:
case 307:
case 938:
case 983:
case 4002:
case 2561:
case 76:
case 2809:
case 3705:
case 2479:
case 2157:
case 1165:
case 2668:
case 14:
case 2286:
case 2371:
case 3647:
case 3121:
case 3013:
case 1133:
case 3262:
case 1772:
case 3587:
case 3146:
case 3574:
case 2893:
case 1371:
case 571:
case 995:
case 1286:
case 2656:
case 1997:
case 3364:
case 2165:
case 2317:
case 1809:
case 1728:
case 206:
case 752:
case 4065:
case 2210:
case 1696:
case 1564:
case 1965:
case 2197:
case 931:
case 1853:
case 1374:
case 1780:
case 3678:
case 2102:
case 1216:
case 578:
case 4057:
case 1508:
case 106:
case 2387:
case 84:
case 2272:
case 3940:
case 3124:
case 2325:
case 496:
case 999:
case 1957:
case 2696:
case 1197:
case 432:
case 4054:
case 1906:
case 735:
case 2776:
case 2770:
case 3073:
case 1245:
case 893:
case 1639:
case 577:
case 189:
case 2151:
case 3915:
case 2567:
case 4000:
case 2245:
case 3688:
case 3260:
case 3266:
case 4091:
case 289:
case 648:
case 3395:
case 1567:
case 2652:
case 3620:
case 1377:
case 53:
case 3626:
case 590:
case 5:
case 4094:
case 2212:
case 3760:
case 2607:
case 3849:
case 1831:
case 1381:
case 1270:
case 1782:
case 3577:
case 1035:
case 3367:
case 185:
case 3115:
case 2191:
case 2270:
case 193:
case 663:
case 889:
case 1063:
case 2106:
case 1212:
case 1607:
case 2100:
case 3438:
case 3823:
case 285:
case 2154:
case 1314:
case 3355:
case 2994:
case 2595:
case 1951:
case 2692:
case 2035:
case 718:
case 3942:
case 510:
case 2070:
case 3773:
case 3807:
case 1263:
case 3132:
case 1012:
case 507:
case 114:
case 1589:
case 328:
case 2235:
case 3484:
case 1623:
case 3538:
case 2012:
case 3411:
case 894:
case 371:
case 1070:
case 365:
case 2623:
case 1235:
case 214:
case 2589:
case 2045:
case 1519:
case 3959:
case 3199:
case 3932:
case 2763:
case 3634:
case 2841:
case 1735:
case 194:
case 90:
case 2888:
case 2338:
case 1763:
case 2455:
case 814:
case 2519:
case 582:
case 1045:
case 3852:
case 3481:
case 369:
case 2082:
case 2735:
case 3839:
case 313:
case 1688:
case 3776:
case 1260:
case 2258:
case 1142:
case 2548:
case 3377:
case 2641:
case 2127:
case 2260:
case 562:
case 3906:
case 2798:
case 808:
case 201:
case 1185:
case 2581:
case 2620:
case 3419:
case 1127:
case 526:
case 936:
case 774:
case 439:
case 2142:
case 1514:
case 1915:
case 3555:
case 2395:
case 389:
case 957:
case 2849:
case 2584:
case 4042:
case 2766:
case 755:
case 108:
case 1511:
case 1355:
case 2367:
case 1618:
case 1823:
case 1438:
case 411:
case 2577:
case 724:
case 2927:
case 1644:
case 3100:
case 3489:
case 2758:
case 3106:
case 1766:
case 3831:
case 1849:
case 4027:
case 1985:
case 2644:
case 3994:
case 2355:
case 2823:
case 385:
case 3035:
case 208:
case 1411:
case 1538:
case 2807:
case 2773:
case 2477:
case 2159:
case 2999:
case 695:
case 821:
case 1892:
case 3235:
case 745:
case 271:
case 54:
case 1773:
case 1999:
case 3495:
case 638:
case 2411:
case 683:
case 2631:
case 2903:
case 3012:
case 1132:
case 2098:
case 3263:
case 3844:
case 3818:
case 3623:
case 265:
case 1058:
case 2932:
case 3467:
case 3045:
case 2448:
case 699:
case 169:
case 1389:
case 749:
case 1959:
case 3519:
case 2273:
case 865:
case 121:
case 3338:
case 3888:
case 1634:
case 1066:
case 1932:
case 947:
case 394:
case 278:
case 2839:
case 631:
case 2569:
case 2471:
case 660:
case 1:
case 2379:
case 1713:
case 1417:
case 3129:
case 3408:
case 2005:
case 62:
case 1896:
case 2283:
case 513:
case 2713:
case 2417:
case 3464:
case 2637:
case 589:
case 2:
case 1471:
case 1801:
case 326:
case 1283:
case 2890:
case 0:
case 1005:
case 2653:
case 827:
case 963:
case 941:
case 376:
case 1804:
case 1474:
case 2213:
case 127:
case 2936:
case 1693:
case 2609:
case 1487:
case 78:
case 656:
case 593:
case 227:
case 442:
case 3086:
case 67:
case 8:
case 1868:
case 3822:
case 2308:
case 1013:
case 4024:
case 4075:
case 3772:
case 732:
case 470:
case 3371:
case 1140:
case 2121:
case 1525:
case 1574:
case 2705:
case 3809:
case 3997:
case 3561:
case 882:
case 514:
case 107:
case 3902:
case 3716:
case 2262:
case 3604:
case 3650:
case 3317:
case 452:
case 497:
case 2140:
case 3893:
case 2574:
case 2146:
case 2975:
case 2924:
case 34:
case 3933:
case 3216:
case 2762:
case 4040:
case 1083:
case 2469:
case 1124:
case 182:
case 1175:
case 2571:
case 2921:
case 1205:
case 807:
case 46:
case 3837:
case 2517:
case 964:
case 3780:
case 2946:
case 3325:
case 2124:
case 3786:
case 2940:
case 1571:
case 2083:
case 2602:
case 2217:
case 3761:
case 2505:
case 4068:
case 450:
case 971:
case 346:
case 1836:
case 1386:
case 1328:
case 1483:
case 1787:
case 3922:
case 2069:
case 965:
case 3572:
case 2196:
case 1968:
case 1697:
case 2956:
case 847:
case 880:
case 3362:
case 2380:
case 2774:
case 3829:
case 2386:
case 2271:
case 2101:
case 1904:
case 3208:
case 538:
case 583:
case 2968:
case 4004:
case 79:
case 1956:
case 2697:
case 928:
case 64:
case 1069:
case 2483:
case 3178:
case 1633:
case 422:
case 1901:
case 599:
case 2771:
case 3646:
case 3640:
case 969:
case 2287:
case 1316:
case 4001:
case 2996:
case 1657:
case 1310:
case 2150:
case 1168:
case 978:
case 767:
case 1225:
case 1274:
case 3764:
case 180:
case 2633:
case 2901:
case 3261:
case 1562:
case 1990:
case 2310:
case 2168:
case 1996:
case 1287:
case 3528:
case 3147:
case 3621:
case 901:
case 360:
case 1025:
case 584:
case 3937:
case 812:
case 3061:
case 257:
case 292:
case 1087:
case 3865:
case 2769:
case 32:
case 2074:
case 3833:
case 3383:
case 3428:
case 3486:
case 1769:
case 192:
case 2513:
case 157:
case 1840:
case 2821:
case 3279:
case 3472:
case 2071:
case 3137:
case 1017:
case 2875:
case 2824:
case 3153:
case 908:
case 212:
case 440:
case 356:
case 2643:
case 3064:
case 2017:
case 3410:
case 65:
case 1071:
case 2583:
case 3909:
case 2269:
case 3313:
case 112:
case 1824:
case 2466:
case 3931:
case 1949:
case 2460:
case 1458:
case 1335:
case 3603:
case 3067:
case 3445:
case 2048:
case 1081:
case 546:
case 319:
case 2573:
case 395:
case 753:
case 1738:
case 4049:
case 433:
case 3055:
case 2949:
case 2335:
case 2885:
case 907:
case 2458:
case 1460:
case 614:
case 1842:
case 3851:
case 3482:
case 2081:
case 158:
case 1498:
case 3476:
case 3800:
case 3373:
case 2123:
case 264:
case 3563:
case 705:
case 50:
case 3095:
case 3632:
case 3412:
case 2498:
case 2149:
case 481:
case 1238:
case 3891:
case 2815:
case 1123:
case 744:
case 1084:
case 52:
case 1832:
case 990:
case 613:
case 93:
case 3295:
case 2606:
case 1859:
case 3463:
case 1107:
case 2600:
case 2654:
case 1691:
case 3360:
case 2192:
case 384:
case 2345:
case 1781:
case 3570:
case 2939:
case 768:
case 560:
case 1606:
case 1211:
case 4052:
case 4039:
case 2382:
case 2832:
case 863:
case 1345:
case 3941:
case 1939:
case 1192:
case 1952:
case 3512:
case 689:
case 248:
case 3435:
case 2598:
case 910:
case 3188:
case 2803:
case 163:
case 141:
case 537:
case 3255:
case 1214:
case 743:
case 1907:
case 1899:
case 1711:
case 1651:
case 2560:
case 3918:
case 1558:
case 4007:
case 1312:
case 2992:
case 2784:
case 2376:
case 3642:
case 4092:
case 3267:
case 2214:
case 241:
case 1803:
case 1777:
case 3582:
case 1281:
case 3627:
case 3141:
case 1784:
case 1370:
case 1376:
case 2312:
case 1694:
case 685:
case 2558:
case 1699:
case 781:
case 899:
case 815:
case 3460:
case 1789:
case 2603:
case 1134:
case 2067:
case 3363:
case 2219:
case 295:
case 2894:
case 1851:
case 1067:
case 238:
case 283:
case 3458:
case 1445:
case 405:
case 195:
case 665:
case 2851:
case 3081:
case 2482:
case 4031:
case 3738:
case 2800:
case 1659:
case 895:
case 621:
case 3077:
case 1412:
case 1632:
case 2289:
case 3238:
case 547:
case 580:
case 3084:
case 299:
case 2373:
case 2854:
case 215:
case 1891:
case 2412:
case 2095:
case 3011:
case 1289:
case 3149:
case 358:
case 2535:
case 2934:
case 1470:
case 906:
case 1476:
case 409:
case 115:
case 2719:
case 231:
case 2767:
case 1755:
case 3714:
case 3600:
case 3606:
case 3748:
case 926:
case 4041:
case 3939:
case 284:
case 2926:
case 1615:
case 3654:
case 4026:
case 3832:
case 601:
case 1767:
case 2089:
case 2512:
case 3598:
case 1366:
case 2435:
case 348:
case 3691:
case 1118:
case 461:
case 1920:
case 1570:
case 1926:
case 3781:
case 1576:
case 512:
case 1795:
case 3777:
case 3803:
case 2188:
case 95:
case 3376:
case 3370:
case 3139:
case 3784:
case 1141:
case 3281:
case 2642:
case 1398:
case 454:
case 341:
case 363:
case 2685:
case 1188:
case 4044:
case 734:
case 479:
case 976:
case 2795:
case 4018:
case 2267:
case 608:
case 3312:
case 1918:
case 3651:
case 2019:
case 1642:
case 1545:
case 1120:
case 2141:
case 41:
case 246:
case 607:
case 3217:
case 2264:
case 3904:
case 2761:
case 2843:
case 3956:
case 3950:
case 1510:
case 467:
case 2362:
case 2624:
case 2675:
case 1947:
case 3069:
case 2572:
case 3101:
case 1761:
case 3774:
case 146:
case 3271:
case 4022:
case 551:
case 1922:
case 2178:
case 2947:
case 722:
case 1362:
case 2208:
case 3697:
case 2510:
case 3968:
case 3274:
case 430:
case 4078:
case 3771:
case 49:
case 564:
case 347:
case 2305:
case 1764:
case 2708:
case 3150:
case 994:
case 2079:
case 3562:
case 1621:
case 1147:
case 1528:
case 1978:
case 2122:
case 3287:
case 3901:
case 2764:
case 3717:
case 1305:
case 2261:
case 2580:
case 2147:
case 682:
case 2978:
case 2528:
case 558:
case 750:
case 3316:
case 2937:
case 677:
case 2061:
case 837:
case 3462:
case 260:
case 1833:
case 856:
case 1857:
case 22:
case 1109:
case 1480:
case 486:
case 1279:
case 989:
case 357:
case 3846:
case 2953:
case 392:
case 63:
case 3074:
case 690:
case 6:
case 160:
case 87:
case 1061:
case 787:
case 4053:
case 1937:
case 1193:
case 1953:
case 4037:
case 2109:
case 2857:
case 1865:
case 1630:
case 2137:
case 1064:
case 4009:
case 2802:
case 2472:
case 3643:
case 237:
case 3875:
case 2779:
case 312:
case 2153:
case 3583:
case 2064:
case 4093:
case 3629:
case 2410:
case 2313:
case 156:
case 563:
case 27:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751868002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,];
var gg_b = "1751868002/";

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
